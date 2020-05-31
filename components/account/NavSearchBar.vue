<template>
  <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon search-text-field d-none d-md-flex">
    <i class="material-icons mdc-text-field__icon">search</i>
    <input class="mdc-text-field__input" id="text-field-hero-input">
    <div class="mdc-notched-outline">
      <div class="mdc-notched-outline__leading"></div>
      <div class="mdc-notched-outline__notch">
        <label for="text-field-hero-input" class="mdc-floating-label">Search..</label>
      </div>
      <div class="mdc-notched-outline__trailing"></div>
    </div>
  </div>
</template>

<script>
  export default
  {
    data(){
      return {
      }
    },
    methods:{
    }
  };
</script>
