<template>
  <div class="index-page">
      <welcome-area></welcome-area>
      <about-area></about-area>
       <how-it-works></how-it-works>
      <get-started></get-started>
  </div>
</template>

<script>
  import WelcomeArea from '@/components/landing/WelcomeArea.vue';
  import AboutArea from '@/components/landing/AboutArea.vue';
  import HowItWorks from '@/components/landing/HowItWorks.vue';
  import GetStarted from '@/components/landing/GetStarted.vue';

  export default {
  components: {
    WelcomeArea,
    AboutArea,
    HowItWorks,
    GetStarted
  },
  data(){
    return {
      title: 'Welcome to SafeRoad'
    }
  },

  asyncData (context) {
    return { project: 'nuxt' }
  },

  layout(context){
    return 'landing';
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>
