<template>
  <v-app>
    <dashboard-core-app-bar />

    <dashboard-core-drawer />

    <dashboard-core-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      DashboardCoreAppBar: () => import('./core/AppBar'),
      DashboardCoreDrawer: () => import('./core/Drawer'),
      // DashboardCoreSettings: () => import('./components/core/Settings'),
      DashboardCoreFooter: () => import('./core/Footer'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
