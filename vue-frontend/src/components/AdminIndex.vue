<template>
  <v-app>
    <app-bar @isDrawer="isDrawer" />

    <core-drawer :expandOnHover="expandOnHover" />

    <!-- <v-main :style="hoverPadding"> -->
    <v-main :class="hoverPadding">
      <router-view/>
    </v-main>
    <dashboard-core-footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/admin/core/AppBar.vue"
import CoreDrawer from "@/components/admin/core/Drawer.vue"

export default {

  components: {
    AppBar,
    CoreDrawer,
    DashboardCoreFooter: () => import('./admin/core/Footer'),
  },

  data: () => ({
    expandOnHover: false,
    hoverPadding: null,
  }),

  methods: {
    isDrawer(isDrawer) {
      let vm = this;
      vm.expandOnHover = !isDrawer;

      if (vm.expandOnHover) {
        // vm.hoverPadding = "padding-left:56px;";
        vm.hoverPadding = "pd_l65";

      } else {
        vm.hoverPadding = null;
      }
    },
  },

}
</script>

<style scoped>
  .pd_l65 {
    padding-left: 65px !important;
  }
</style>