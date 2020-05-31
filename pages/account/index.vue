<template>
  <div class="index-account-page">
    <UserDashboard></UserDashboard>
  </div>
</template>

<script>
  import UserDashboard from '@/components/user/Dashboard.vue';

  export default {
  components: {
    UserDashboard
  },
  data(){
    return {
      title: 'Dashboard'
    }
  },

  layout(context){
    return 'account';
  },

  head () {
    return {
      title: this.title
    }
  }
}
</script>
