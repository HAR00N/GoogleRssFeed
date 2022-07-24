<template>
  <v-app>
    <app-bar @isDrawer="isDrawer" />

    <core-drawer :expandOnHover="expandOnHover" />

    <v-main>
      <router-view/>
    </v-main>
    <dashboard-core-footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/core/AppBar.vue"
import CoreDrawer from "@/components/core/Drawer.vue"

export default {
  components: {
    AppBar,
    CoreDrawer,
    DashboardCoreFooter: () => import('./core/Footer'),
  },

  data: () => ({
    expandOnHover: false,      
  }),
  methods: {
    isDrawer(isDrawer) {
      let vm = this;
      vm.expandOnHover = !isDrawer;
    }
  },
}
</script>
