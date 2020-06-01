<template>
    <div class="body-wrapper">

    <Sidebar :open="sidebarIsOpen" />

    <div class="main-wrapper mdc-drawer-app-content">

     <NavBar @toggle-sidebar="toggleSidebar" />

      <div class="page-wrapper mdc-toolbar-fixed-adjust">
        <main class="content-wrapper">
          <div class="mdc-layout-grid">
            <nuxt />
            <div class="ddd">


<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-3-desktop mdc-layout-grid__cell&#45;&#45;span-4-tablet">-->
<!--                <div class="mdc-card info-card info-card&#45;&#45;danger">-->
<!--                  <div class="card-inner">-->
<!--                    <h5 class="card-title">Annual Profit</h5>-->
<!--                    <h5 class="font-weight-light pb-2 mb-1 border-bottom">$1,958,104.00</h5>-->
<!--                    <p class="tx-12 text-muted">55% target reached</p>-->
<!--                    <div class="card-icon-wrapper">-->
<!--                      <i class="material-icons">attach_money</i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-3-desktop mdc-layout-grid__cell&#45;&#45;span-4-tablet">-->
<!--                <div class="mdc-card info-card info-card&#45;&#45;primary">-->
<!--                  <div class="card-inner">-->
<!--                    <h5 class="card-title">Lead Conversion</h5>-->
<!--                    <h5 class="font-weight-light pb-2 mb-1 border-bottom">$234,769.00</h5>-->
<!--                    <p class="tx-12 text-muted">87% target reached</p>-->
<!--                    <div class="card-icon-wrapper">-->
<!--                      <i class="material-icons">trending_up</i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-3-desktop mdc-layout-grid__cell&#45;&#45;span-4-tablet">-->
<!--                <div class="mdc-card info-card info-card&#45;&#45;info">-->
<!--                  <div class="card-inner">-->
<!--                    <h5 class="card-title">Average Income</h5>-->
<!--                    <h5 class="font-weight-light pb-2 mb-1 border-bottom">$1,200.00</h5>-->
<!--                    <p class="tx-12 text-muted">87% target reached</p>-->
<!--                    <div class="card-icon-wrapper">-->
<!--                      <i class="material-icons">credit_card</i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-12">-->
<!--                <div class="mdc-card">-->
<!--                  <div class="d-flex justify-content-between">-->
<!--                    <h4 class="card-title mb-0">Revenue by location</h4>-->
<!--                    <div>-->
<!--                      <i class="material-icons refresh-icon">refresh</i>-->
<!--                      <i class="material-icons options-icon ml-2">more_vert</i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="d-block d-sm-flex justify-content-between align-items-center">-->
<!--                    <h5 class="card-sub-title mb-2 mb-sm-0">Sales performance revenue based by country</h5>-->
<!--                    <div class="menu-button-container">-->
<!--                      <button class="mdc-button mdc-menu-button mdc-button&#45;&#45;raised button-box-shadow tx-12 text-dark bg-white font-weight-light">-->
<!--                        Last 7 days-->
<!--                        <i class="material-icons">arrow_drop_down</i>-->
<!--                      </button>-->
<!--                      <div class="mdc-menu mdc-menu-surface" tabindex="-1">-->
<!--                        <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">-->
<!--                          <li class="mdc-list-item" role="menuitem">-->
<!--                            <h6 class="item-subject font-weight-normal">Back</h6>-->
<!--                          </li>-->
<!--                          <li class="mdc-list-item" role="menuitem">-->
<!--                            <h6 class="item-subject font-weight-normal">Forward</h6>-->
<!--                          </li>-->
<!--                          <li class="mdc-list-item" role="menuitem">-->
<!--                            <h6 class="item-subject font-weight-normal">Reload</h6>-->
<!--                          </li>-->
<!--                          <li class="mdc-list-divider"></li>-->
<!--                          <li class="mdc-list-item" role="menuitem">-->
<!--                            <h6 class="item-subject font-weight-normal">Save As..</h6>-->
<!--                          </li>-->
<!--                        </ul>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="mdc-layout-grid__inner mt-2">-->
<!--                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell&#45;&#45;span-6 mdc-layout-grid__cell&#45;&#45;span-8-tablet">-->
<!--                      <div class="table-responsive">-->
<!--                        <table class="table dashboard-table">-->
<!--                          <tbody>-->
<!--                          <tr>-->
<!--                            <td>-->
<!--                              <span class="flag-icon-container"><i class="flag-icon flag-icon-us mr-2"></i></span>United States</td>-->
<!--                            <td>$1,671.10</td>-->
<!--                            <td class=" font-weight-medium"> 39% </td>-->
<!--                          </tr>-->
<!--                          <tr>-->
<!--                            <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-ph mr-2"></i></span>Philippines	</td>-->
<!--                            <td>$1,064.75</td>-->
<!--                            <td class=" font-weight-medium"> 30% </td>-->
<!--                          </tr>-->
<!--                          <tr>-->
<!--                            <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-gb mr-2"></i></span>United Kingdom</td>-->
<!--                            <td>$1,055.98</td>-->
<!--                            <td class=" font-weight-medium"> 45% </td>-->
<!--                          </tr>-->
<!--                          <tr>-->
<!--                            <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-ca mr-2"></i></span>Canada</td>-->
<!--                            <td>$1,045.49</td>-->
<!--                            <td class=" font-weight-medium"> 80% </td>-->
<!--                          </tr>-->
<!--                          <tr>-->
<!--                            <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-fr mr-2"></i></span>France</td>-->
<!--                            <td>$2,050.93</td>-->
<!--                            <td class=" font-weight-medium"> 10% </td>-->
<!--                          </tr>-->
<!--                          </tbody>-->
<!--                        </table>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell&#45;&#45;span-6 mdc-layout-grid__cell&#45;&#45;span-8-tablet">-->
<!--                      <div id="revenue-map" class="revenue-world-map"></div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-6-desktop mdc-layout-grid__cell&#45;&#45;span-4-tablet">-->
<!--                <div class="mdc-card bg-success text-white">-->
<!--                  <div class="d-flex justify-content-between">-->
<!--                    <h3 class="font-weight-normal">Impressions</h3>-->
<!--                    <i class="material-icons options-icon text-white">more_vert</i>-->
<!--                  </div>-->
<!--                  <div class="mdc-layout-grid__inner align-items-center">-->
<!--                    <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-4-desktop mdc-layout-grid__cell&#45;&#45;span-3-tablet mdc-layout-grid__cell&#45;&#45;span-2-phone">-->
<!--                      <div>-->
<!--                        <h5 class="font-weight-normal mt-2">Customers 58.39k</h5>-->
<!--                        <h2 class="font-weight-normal mt-3 mb-0">636,757K</h2>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-8-desktop mdc-layout-grid__cell&#45;&#45;span-5-tablet mdc-layout-grid__cell&#45;&#45;span-2-phone">-->
<!--                      <canvas id="impressions-chart" height="80"></canvas>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-6-desktop mdc-layout-grid__cell&#45;&#45;span-4-tablet">-->
<!--                <div class="mdc-card bg-info text-white">-->
<!--                  <div class="d-flex justify-content-between">-->
<!--                    <h3 class="font-weight-normal">Traffic</h3>-->
<!--                    <i class="material-icons options-icon text-white">more_vert</i>-->
<!--                  </div>-->
<!--                  <div class="mdc-layout-grid__inner align-items-center">-->
<!--                    <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-4-desktop mdc-layout-grid__cell&#45;&#45;span-3-tablet mdc-layout-grid__cell&#45;&#45;span-2-phone">-->
<!--                      <div>-->
<!--                        <h5 class="font-weight-normal mt-2">Customers 58.39k</h5>-->
<!--                        <h2 class="font-weight-normal mt-3 mb-0">636,757K</h2>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-8-desktop mdc-layout-grid__cell&#45;&#45;span-5-tablet mdc-layout-grid__cell&#45;&#45;span-2-phone">-->
<!--                      <canvas id="traffic-chart" height="80"></canvas>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-8">-->
<!--                <div class="mdc-card">-->
<!--                  <div class="d-flex justify-content-between align-items-center">-->
<!--                    <h4 class="card-title mb-2 mb-sm-0">Revenue by location</h4>-->
<!--                    <div class="d-flex justtify-content-between align-items-center">-->
<!--                      <p class="d-none d-sm-block text-muted tx-12 mb-0 mr-2">Goal reached</p>-->
<!--                      <i class="material-icons options-icon">more_vert</i>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="d-block d-sm-flex justify-content-between align-items-center">-->
<!--                    <h6 class="card-sub-title mb-0">Sales performance revenue based by country</h6>-->
<!--                    <div class="mdc-tab-wrapper revenue-tab mdc-tab&#45;&#45;secondary">-->
<!--                      <div class="mdc-tab-bar" role="tablist">-->
<!--                        <div class="mdc-tab-scroller">-->
<!--                          <div class="mdc-tab-scroller__scroll-area">-->
<!--                            <div class="mdc-tab-scroller__scroll-content">-->
<!--                              <button class="mdc-tab mdc-tab&#45;&#45;active" role="tab" aria-selected="true" tabindex="0">-->
<!--                                <span class="mdc-tab__content">-->
<!--                                  <span class="mdc-tab__text-label">1W</span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab-indicator mdc-tab-indicator&#45;&#45;active">-->
<!--                                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content&#45;&#45;underline"></span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab__ripple"></span>-->
<!--                              </button>-->
<!--                              <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">-->
<!--                                <span class="mdc-tab__content">-->
<!--                                  <span class="mdc-tab__text-label">1M</span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab-indicator mdc-tab-indicator">-->
<!--                                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content&#45;&#45;underline"></span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab__ripple"></span>-->
<!--                              </button>-->
<!--                              <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">-->
<!--                                <span class="mdc-tab__content">-->
<!--                                  <span class="mdc-tab__text-label">3M</span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab-indicator mdc-tab-indicator">-->
<!--                                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content&#45;&#45;underline"></span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab__ripple"></span>-->
<!--                              </button>-->
<!--                              <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">-->
<!--                                <span class="mdc-tab__content">-->
<!--                                  <span class="mdc-tab__text-label">1Y</span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab-indicator mdc-tab-indicator">-->
<!--                                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content&#45;&#45;underline"></span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab__ripple"></span>-->
<!--                              </button>-->
<!--                              <button class="mdc-tab mdc-tab" role="tab" aria-selected="true" tabindex="0">-->
<!--                                <span class="mdc-tab__content">-->
<!--                                  <span class="mdc-tab__text-label">ALL</span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab-indicator mdc-tab-indicator">-->
<!--                                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content&#45;&#45;underline"></span>-->
<!--                                </span>-->
<!--                                <span class="mdc-tab__ripple"></span>-->
<!--                              </button>-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                      <div class="content content&#45;&#45;active">-->
<!--                      </div>-->
<!--                      <div class="content">-->
<!--                      </div>-->
<!--                      <div class="content">-->
<!--                      </div>-->
<!--                      <div class="content">-->
<!--                      </div>-->
<!--                      <div class="content">-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="chart-container mt-4">-->
<!--                    <canvas id="revenue-chart" height="260"></canvas>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="mdc-layout-grid__cell stretch-card mdc-layout-grid__cell&#45;&#45;span-4 mdc-layout-grid__cell&#45;&#45;span-8-tablet">-->
<!--                <div class="mdc-card">-->
<!--                  <div class="d-flex d-lg-block d-xl-flex justify-content-between">-->
<!--                    <div>-->
<!--                      <h4 class="card-title">Order Statistics</h4>-->
<!--                      <h6 class="card-sub-title">Customers 58.39k</h6>-->
<!--                    </div>-->
<!--                    <div id="sales-legend" class="d-flex flex-wrap"></div>-->
<!--                  </div>-->
<!--                  <div class="chart-container mt-4">-->
<!--                    <canvas id="chart-sales" height="260"></canvas>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->

              <!--              <nuxt />-->
            </div>
          </div>
        </main>

        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '@/components/account/Sidebar.vue';
  import NavBar from '@/components/account/NavBar.vue';
  import Footer from '@/components/account/Footer.vue';

  export default {

    components: {
      Sidebar,
      NavBar,
      Footer
    },

    //middleware: 'authenticated',
    data(){
      return {
        sidebarIsOpen: true
      }
    },

    methods: {
      toggleSidebar() {
        console.log('hnadling sidebar toggle')
        this.sidebarIsOpen = !this.sidebarIsOpen;
      }
    },

    head () {
        return {
          bodyAttrs: {
            class:'account-layout'
          },

          meta: [
            { charset: 'utf-8' },
            // { name: 'viewport', content: 'device-width, initial-scale=1, shrink-to-fit=no' },
          ],

          link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'},
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800'},
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700,800'},
          ]
        }
      }
  }
</script>

<style>
  /*@import 'material-design-icons/iconfont/material-icons.css';*/
  @import '~assets/account/vendors/mdi/css/materialdesignicons.min.css';
  @import 'flag-icon-css/css/flag-icon.css';
  @import '~assets/account/vendors/jvectormap/jquery-jvectormap.css';
  @import '~assets/account/vendors/css/vendor.bundle.base.css';
  @import '~assets/account/css/fonts.css';
  @import '~assets/account/css/style.css';
</style>
