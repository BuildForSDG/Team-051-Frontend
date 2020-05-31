<template>
  <div class="menu-button-container">
    <button class="mdc-button mdc-menu-button">
      <i class="mdi mdi-email"></i>
      <span class="count-indicator">
                  <span class="count">3</span>
                </span>
    </button>
    <div class="mdc-menu mdc-menu-surface" tabindex="-1">
      <h6 class="title"><i class="mdi mdi-email-outline mr-2 tx-16"></i> Messages</h6>
      <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail">
            <img src="~assets/account/images/faces/face4.jpg" alt="user">
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Mark send you a message</h6>
            <small class="text-muted"> 1 Minutes ago </small>
          </div>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail">
            <img src="~assets/account/images/faces/face2.jpg" alt="user">
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Cregh send you a message</h6>
            <small class="text-muted"> 15 Minutes ago </small>
          </div>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail">
            <img src="~assets/account/images/faces/face3.jpg" alt="user">
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Profile picture updated</h6>
            <small class="text-muted"> 18 Minutes ago </small>
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
