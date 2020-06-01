<template>
  <div class="menu-button-container menu-profile d-none d-md-block">
    <button class="mdc-button mdc-menu-button">
      <span class="d-flex align-items-center">
        <span class="figure">
          <img src="~assets/account/images/face1.jpg" alt="user" class="user">
        </span>
        <span class="user-name">{{name}}</span>
      </span>
    </button>

    <div class="mdc-menu mdc-menu-surface" tabindex="-1">
      <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">

        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon-only">
            <i class="mdi mdi-account-edit-outline text-primary"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Edit profile</h6>
          </div>
        </li>

        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon-only">
            <i class="mdi mdi-settings-outline text-primary"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Logout</h6>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        name: 'Emeka',
        profile_picture: 'assets/account/images/faces/face1.jpg'
      }
    }
  }
</script>
