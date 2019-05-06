<template>
	<footer class="footer">
		<div class="container small pt-3 bg-light">
			<div class="row">
				<div class="col-md-3 d-none d-md-block">
					<ul class="list-unstyled">
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://software.karpolan.com"
								:title="'Software created by ' + name"
								>Software</a
							>
						</li>
						<li><router-link to="/" :title="'Websites created by ' + name">Websites</router-link></li>
						<!--	
						<li><a target="_blank" rel="noopener noreferrer" href="https://services.karpolan.com" :title="'Services created by ' + name">Services</a></li>
					-->
					</ul>
				</div>

				<div class="col-md-3 d-none d-md-block">
					<ul class="list-unstyled">
						<li>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://book-product.karpolan.com"
								:title="'Books by ' + name"
								>Books</a
							>
						</li>
						<!--	
						<li><a target="_blank" rel="noopener noreferrer" href="https://karpolan.blogspot.com" :title="'Articles by ' + name">Articles</a></li>
					-->
						<li>
							<a target="_blank" rel="noopener noreferrer" href="https://blog.karpolan.com" :title="'Blog by ' + name"
								>Blog</a
							>
						</li>
					</ul>
				</div>

				<div class="social col-md-6 text-center text-md-right">
					<ul class="list-unstyled list-inline social-icons d-none d-md-block">
						<SocialIcon :link="linkedin" icon="linkedin" :title="name + ' on LinkedIn'" />
						<SocialIcon :link="facebook" icon="facebook" :title="name + ' on Facebook'" />
						<SocialIcon :link="twitter" icon="twitter" :title="name + ' on Twitter'" />
						<SocialIcon :link="github" icon="github" :title="name + ' on GitHub'" />
					</ul>

					<div class="copyright pb-3 d-none d-sm-block">
						Copyright &copy; 1994-{{ new Date().getFullYear() + ' ' }}
						<a target="_blank" rel="noopener noreferrer" href="https://karpolan.com/">KARPOLAN</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import SocialIcon from './SocialIcon';
import '@/assets/social-colors.css'; // Colors for social icons

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin, faFacebook, faTwitter, faGithub);

// Application Data
import { name, linkedin, facebook, twitter, github } from '@/data/consts';

export default {
	name: 'Footer',

	data: () => ({
		name,
		linkedin,
		facebook,
		twitter,
		github,
	}),

	components: {
		SocialIcon,
	},
};
</script>
