<template>
  <div class="guest-login-page">
    <login-area></login-area>
  </div>
</template>

<script>
  import LoginArea from '@/components/landing/LoginArea.vue';

  export default {

    components: {
      LoginArea
    },

    data(){
      return {
        title: 'Login'
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
