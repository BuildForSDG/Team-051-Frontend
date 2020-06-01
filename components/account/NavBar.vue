<template>
  <header class="mdc-top-app-bar">
    <div class="mdc-top-app-bar__row">
      <div class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">

        <button @click="toggleSidebar" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button sidebar-toggler">
          menu
        </button>

        <span class="mdc-top-app-bar__title">Greetings {{name}}!</span>

        <NavSearchBar />

        <div class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end mdc-top-app-bar__section-right">

          <NavMenuProfile/>
          <div class="divider d-none d-md-block"></div>

          <NavSettings  />
          <NavNotifications  />
          <NavMessages />
          <NavQuickLinks />

        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import NavSearchBar from "./NavSearchBar";
  import NavSettings from "./NavSettings";
  import NavNotifications from "./NavNotifications";
  import NavMessages from "./NavMessages";
  import NavQuickLinks from "./NavQuickLinks";
  import NavMenuProfile from "./NavMenuProfile";

  export default {
    components:{
      NavSearchBar,
      NavMenuProfile,
      NavSettings,
      NavNotifications,
      NavMessages,
      NavQuickLinks
    },

    data(){
      //TODO: move to vuex store
      return {
        name: 'Emeka',
        email: 'fmx@37.com'
      }
    },

    methods: {
      toggleSidebar() {
        console.log('emit toggle sidebar from components/accounts/NavBar.vue')
        this.$emit('toggle-sidebar');
      }
    }
  };
</script>
