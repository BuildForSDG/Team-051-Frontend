<template>
  <div class="landing-layout">

    <loader></loader>

    <nav-bar
      logo-src="assets/landing/images/logo.png"
      logo-to="/">
    </nav-bar>

    <nuxt />

    <footer-area></footer-area>

    <copyright-area></copyright-area>

    <scroll-to-top></scroll-to-top>

  </div>
</template>

<script>
  import Loader from '@/components/landing/Loader.vue';
  import NavBar from '@/components/landing/NavBar.vue';
  import FooterArea from '@/components/landing/FooterArea.vue';
  import CopyrightArea from '@/components/landing/CopyrightArea.vue';
  import ScrollToTop from '@/components/landing/ScrollToTop.vue';

  export default
  {
    components: {
      Loader,
      NavBar,
      FooterArea,
      CopyrightArea,
      ScrollToTop
    },

    head: {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
      ]
    }
  };
</script>

<style>
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'et-line/style.css';
  @import 'font-awesome/css/font-awesome.css';
  @import 'lity/dist/lity.css';
  @import '~assets/landing/css/main.css';
  @import '~/assets/landing/css/responsive.css';
</style>
