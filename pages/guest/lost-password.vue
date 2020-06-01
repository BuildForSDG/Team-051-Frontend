<template>
  <div class="guest-lost-password-page">
      <lost-password-area></lost-password-area>
  </div>
</template>

<script>
  import LostPasswordArea from '@/components/landing/LostPasswordArea.vue';

  export default {

    components: {
      LostPasswordArea
    },

    data(){
      return {
        title: 'Lost Password'
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
