<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg bg-info">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Websites by KARPOLAN</router-link>
        <button
          ref="navbarToggler"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div ref="navbar" class="collapse navbar-collapse" id="navbar">
          <div class="navbar-nav ms-auto">
            <router-link active-class="active" class="nav-link" to="/contact/index.html">Contact</router-link>
            <router-link active-class="active" class="nav-link" to="/about/index.html">About</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  watch: {
    $route() {
      const navbarIsOpen = this.$refs.navbar.classList.contains('show');
      if (navbarIsOpen) {
        this.$refs.navbarToggler.click(); // Collapse the visible only navbar when any navigation link is clicked
      }
    },
  },
};
</script>
