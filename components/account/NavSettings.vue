<template>
  <div class="menu-button-container d-none d-md-block">
    <button class="mdc-button mdc-menu-button">
      <i class="mdi mdi-settings"></i>
    </button>
    <div class="mdc-menu mdc-menu-surface" tabindex="-1">
      <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon-only">
            <i class="mdi mdi-alert-circle-outline text-primary"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Settings</h6>
          </div>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon-only">
            <i class="mdi mdi-progress-download text-primary"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Update</h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default
  {
    components: {

    },

    data(){
      return {
      }
    },
    methods:{
    }
  };
</script>
