<template>
  <div class="guest-signup-page">
    <signup-area></signup-area>
  </div>
</template>

<script>
  import SignupArea from '@/components/landing/SignupArea.vue';

  export default {

    components: {
      SignupArea
    },

    data(){
      return {
        title: 'Signup'
      }
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
