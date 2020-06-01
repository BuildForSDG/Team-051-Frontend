<template>
  <div class="menu-button-container d-none d-md-block">
    <button class="mdc-button mdc-menu-button">
      <i class="mdi mdi-arrow-down-bold-box"></i>
    </button>
    <div class="mdc-menu mdc-menu-surface" tabindex="-1">
      <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon-only">
            <i class="mdi mdi-lock-outline text-primary"></i>
          </div>
          <div class="item-content d-flex align-items-start flex-column justify-content-center">
            <h6 class="item-subject font-weight-normal">Lock screen</h6>
          </div>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <div class="item-thumbnail item-thumbnail-icon-only">
            <i class="mdi mdi-logout-variant text-primary"></i>
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
