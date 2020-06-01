<template>
  <nav class="mdc-list mdc-drawer-menu">

    <div class="mdc-list-item mdc-drawer-item">
      <nuxt-link to="/account" class="mdc-drawer-link">
        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">home</i>
        Dashboard
      </nuxt-link>
    </div>

    <div class="mdc-list-item mdc-drawer-item">
      <a class="mdc-drawer-link">
        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">assignment</i>
        Report Incident
      </a>
    </div>

    <div class="mdc-list-item mdc-drawer-item">
      <a class="mdc-drawer-link">
        <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">directions_car</i>
        Trips
      </a>
    </div>

  </nav>
</template>

<script>
  export default
  {
    components: {
    },

    data(){
      return {}
    }
  };
</script>

<style>
</style>
