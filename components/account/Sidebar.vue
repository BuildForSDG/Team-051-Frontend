<template>
  <aside :class="{'mdc-drawer': true, 'mdc-drawer--dismissible' : dismissible, 'mdc-drawer--open': open}">

    <div class="mdc-drawer__header">
      <nuxt-link to="/" class="brand-logo">
        <img src="~assets/account/images/logo.svg" alt="logo">
      </nuxt-link>
    </div>

    <div class="mdc-drawer__content">
<!--      <div class="user-info">-->
<!--        <p class="name">{{name}}</p>-->
<!--        <p class="email">{{email}}</p>-->
<!--      </div>-->

      <div class="mdc-list-group">
        <UserSidebar v-if="isUser" />
      </div>

      <div class="profile-actions">
<!--        TODO Implement-->
        <a href="javascript:;">Settings</a>
        <span class="divider"></span>
        <a href="javascript:;">Logout</a>
      </div>

    </div>
  </aside>
</template>

<script>
  import UserSidebar from '@/components/user/Sidebar.vue';

  export default
  {
    components: {
      UserSidebar
    },

    props: {
      open: {
        default: true,
        type: Boolean
      },
      dismissible: {
        default: true,
        type: Boolean
      },
    },

    data(){
      //TODO: move to vuex store
      return {
        name: 'Emeka',
        email: 'fmx@37.com'
      }
    },
    methods:{
      //TODO: move to vuex store
      isUser(){
        return true;
      }
    }
  };
</script>
