<template>
  <div class="menu-button-container">
    <button class="mdc-button mdc-menu-button">
      <i class="mdi mdi-bell"></i>
    </button>
    <div class="mdc-menu mdc-menu-surface" tabindex="-1">
      <h6 class="title"> <i class="mdi mdi-bell-outline mr-2 tx-16"></i> Notifications</h6>
      <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon">
            <i class="mdi mdi-email-outline"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">You received a new message</h6>
            <small class="text-muted"> 6 min ago </small>
          </div>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon">
            <i class="mdi mdi-account-outline"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">New user registered</h6>
            <small class="text-muted"> 15 min ago </small>
          </div>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon">
            <i class="mdi mdi-alert-circle-outline"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">System Alert</h6>
            <small class="text-muted"> 2 days ago </small>
          </div>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon">
            <i class="mdi mdi-update"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">You have a new update</h6>
            <small class="text-muted"> 3 days ago </small>
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
