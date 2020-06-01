<template>
  <div class="mdc-layout-grid__inner">
    <div v-for="card in cards" class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3-desktop mdc-layout-grid__cell--span-4-tablet">
      <InfoCard
        :type="card.type"
        :material_icon="card.icon"
        :title="card.title"
        :subtitle="card.subtitle"
        :desc="card.desc"
       >
      </InfoCard>
    </div>
  </div>
</template>

<script>
  import { Bar } from 'vue-chartjs'
  import InfoCard from '@/components/account/InfoCard.vue';

  export default {
    extends: Bar,
    mounted () {
      //this.renderChart(data, options)https://vue-chartjs.org/guide/
    },

    components: {
      InfoCard
    },

    //middleware: 'authenticated',
    data(){
      return {
        cards : [
          {type: 'danger', icon: 'directions_car', title: 'Accidents', subtitle: '323', desc: '48% Response'},
          {type: 'success', icon: 'local_hospital', title: 'Hospitals', subtitle: '303', desc: '41% Response'},
          {type: 'primary', icon: 'security', title: 'Police', subtitle: '3213', desc: '28% Response'},
          {type: 'info', icon: 'trending_up', title: 'Safety', subtitle: '13', desc: '28% Response'},
        ],


      }
    }
  }
</script>
