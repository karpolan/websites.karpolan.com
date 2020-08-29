/**
 * Combines "schema.json" files from all subfolders into singe "all.json" files as array of objects
 */
const glob = require('glob');
const fs = require('fs');

/**
 * Returns capitalized version (Upper first char for every word) of the given string
 * @param {String} s - String To Capitalize
 */
const capitalizeString = (s) => {
  //	return s.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  return s.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
};

/**
 * Build "all.json" file with array of all "/abc-xyz/schema.json" files
 */
glob('**/schema.json', {}, (err, files) => {
  let allObjects = [];

  if (err) {
    console.error('glob error: ', err);
    return false;
  }

  files.map((fileName, index) => {
    console.log('Processing "%s" file...', fileName);
    const fileData = fs.readFileSync(fileName);
    const newObject = JSON.parse(fileData);
    // console.log(index, fileName, newObject);

    allObjects.push({
      id: fileName.substring(0, fileName.indexOf('/')),
      schema: newObject,
    });
    // Write generic "index.html" to product folder
    const indexFileName = fileName.replace('schema.json', 'index.html');
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>${newObject.name}</title>
		<meta
			name="description"
			content="${newObject.name} website is created by Anton Karpenko (aka KARPOLAN)"
		/>
	</head>
	<body>
		<h1 id="name">${newObject.name}</h1>
		<div>
			<p id="desc">${newObject.description}</p>
			<a id="link" href="${newObject.url}">Visit ${newObject.name} website</a>
			<p id="text">${newObject.text}</p>
		</div>
		<script type="application/ld+json">
${JSON.stringify(newObject)}
		</script>
	</body>
<html>`;
    fs.writeFile(indexFileName, htmlContent, (err) => {
      if (err) {
        console.error('fs.writeFile error: ', err);
        return false;
      }
      return true;
    });
  }); // files.map()

  // Write generic "all.json" to root folder
  fs.writeFile('all.json', JSON.stringify(allObjects), (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  }); // fs.writeFile()

  console.log('All "schema.json" files successfully combined into "all.json" file');
  return true;
}); // glob('**/schema.json')

/**
 * Build index.html and sitemap.xml files with links to all "/abc-xyz/" folders
 */
glob('**/index.html', {}, (err, files) => {
  const htmlDataItems = []; // for '/data/index.html'
  const xmlDataItems = []; // for '/data/sitempa.xml'
  const xmlRootItems = []; // for '/sitempa.xml'

  if (err) {
    console.error('glob error: ', err);
    return false;
  }

  files.map((fileName, index) => {
    console.log('Linking "%s" file...', fileName);
    const link = fileName.substring(0, fileName.indexOf('/'));
    if (link !== '') {
      // Skipping root folder
      const text = capitalizeString(link.replace(/-/g, ' '));
      htmlDataItems.push(`<li><a href="${link}/index.html">${text}/index.html</a></li>`);
      xmlDataItems.push(
        `<url><loc>https://websites.karpolan.com/data/${link}/index.html</loc><priority>0.7</priority></url>`
      );
      xmlRootItems.push(
        `<url><loc>https://websites.karpolan.com/${link}/index.html</loc><priority>0.9</priority></url>`
      );
    }
  }); // files.map()

  // Write "index.html"
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
</head>
<body>
	<h1 id="name">All Products</h1>
	<ul>
${htmlDataItems.join('\n')}
	</ul>
</body>
</html>`;
  fs.writeFile('index.html', htmlContent, (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  });
  console.log('HTML links to all sub-folders added to "index.html" file');

  // Create Data Sitemap "/data/sitemap.xml"
  const xmpDataSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://websites.karpolan.com/data/index.html</loc><priority>0.6</priority></url>
${xmlDataItems.join('\n')}
</urlset>`;
  fs.writeFile('sitemap.xml', xmpDataSitemap, (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  });
  console.log('URL of all sub-folders added to "/data/sitemap.xml" file');

  // Create Root sitemap "/sitemap.xml"
  const xmpRootSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://websites.karpolan.com</loc><priority>1.0</priority></url>
<url><loc>https://websites.karpolan.com/index.html</loc><priority>1.0</priority></url>
<url><loc>https://websites.karpolan.com/contact/index.html</loc><priority>0.3</priority></url>
<url><loc>https://websites.karpolan.com/about/index.html</loc><priority>0.4</priority></url>
${xmlRootItems.join('\n')}
</urlset>`;
  fs.writeFile('../sitemap.xml', xmpRootSitemap, (err) => {
    if (err) {
      console.error('fs.writeFile error: ', err);
      return false;
    }
    return true;
  });
  console.log('URL of all products added to "/sitemap.xml" file');

  return true;
}); // glob('**/index.html')
