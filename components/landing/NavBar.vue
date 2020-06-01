<template>

   <nav class="navbar navbar-expand-lg">
		  <div class="container">
        <nuxt-link class="navbar-brand" :to="logoTo">
          <img :src="resolvelogoSrc" alt="logo">
        </nuxt-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false"
          aria-label="Toggle navigation">
				  <span class="fa fa-bars"></span>
			  </button>

        <div class="collapse navbar-collapse" id="main-navbar">
				  <ul class="navbar-nav ml-auto">
              <li class="nav-item">
					  	  <nuxt-link to="/" class="nav-link" data-scroll-nav="1">Home</nuxt-link>
				  	  </li>

              <li class="nav-item dropdown">
                <nuxt-link to="/" class="nav-link dropdown-toggle"
                  id="navbarDropdown"  data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false" role="button">
                  Blog
                </nuxt-link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <nuxt-link to="/" class="dropdown-item fs-14">Blog List</nuxt-link>
                    <nuxt-link to="/" class="dropdown-item fs-14">Blog Grid</nuxt-link>
                    <nuxt-link to="/" class="dropdown-item fs-14">Single Blog</nuxt-link>
                </div>
					    </li>

              <li class="nav-item">
					  	  <nuxt-link to="/guest/signup" class="nav-link" data-scroll-nav="1">Signup</nuxt-link>
				  	  </li>

              <li class="nav-item log-in">
                <nuxt-link to="/guest/login" class="nav-link flex-center bg-blue radius-5px transition-3">
                  Log In
                </nuxt-link>
              </li>
				  </ul>
        </div>

		  </div>
	  </nav>
</template>

<script>
  export default {
    data(){
      return {

      }
    },

    props: {
      logoSrc: {
        type: String,
        required: true
      },
      logoTo: {
        type: String,
        required: true
      }
    },

    computed: {
      //TODO: move this to store
      resolvelogoSrc : function() {

        if(this.isUrl(this.logoSrc)){
          return this.logoSrc;
        }

        if(!this.logoSrc) return;
        return require('~/' + this.logoSrc)
      }
    },

    //TODO: move to mixin
    methods: {
      isUrl(s) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(s);
      }
    }
  }
</script>
