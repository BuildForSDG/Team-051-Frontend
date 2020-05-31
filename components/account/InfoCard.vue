<template>
  <div :class="typeClass">
    <div class="card-inner">
      <h5 v-show="title" class="card-title">{{title}}</h5>
      <h5 v-show="subtitle" class="font-weight-light pb-2 mb-1 border-bottom">{{subtitle}}</h5>
      <p v-show="desc" class="tx-12 text-muted">{{desc}}</p>

      <div v-if="material_icon" class="card-icon-wrapper">
        <i class="material-icons">{{material_icon}}</i>
      </div>
      <div v-else-if="class_icon" class="card-icon-wrapper">
        <i :class="class_icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      type: {
        type: String,
      },
      material_icon: {
        type: String,
      },
      class_icon: {
        type: String,
      },
      title: {
        type: String,
      },
      subtitle: {
        type: String,
      },
      desc: {
        type: String,
      },

    },

    computed: {
      typeClass: function () {
        return this.type ? `mdc-card info-card info-card--${this.type}` :
          `mdc-card info-card info-card--success`;
      }
    },

    data(){
      return {}
    }
  };
</script>

<style>
</style>

