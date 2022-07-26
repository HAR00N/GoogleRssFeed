<template>
  <v-app-bar
    app
    color="white"
    clipped-left
    height="50"
    elevation="2"
  >
    <v-btn 
      color="transparent" 
      class="mx-1 px-0 btn-drawer"
      elevation="0" 
      small
      @click="setDrawer()"
      fab
      >
        <v-icon v-if="drawer" color="#67A588"> mdi-text </v-icon>
        <v-icon v-else color="#67A588"> mdi-menu </v-icon>
    </v-btn>

    <div class="d-flex align-center">
      <v-img alt= "Dain Logo"
      class="color-logo"
      contain
      src="@/assets/dainleaders_white.svg"
      width="160"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn        
      color="#67A588"
      class="mr-4"
      rounded
      elevation="0"
    >
      <v-icon color="white">mdi-open-in-new</v-icon>
      <span class="ml-2 white--text">Client Page</span>
    </v-btn>

    <v-btn small fab color="#67A588" elevation="0">
      <v-icon color="white">mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
    }),

    methods: {
        setDrawer: function () {
            let vm = this;
            if (vm.drawer == true) {
                vm.drawer = false;
            }
            else {
                vm.drawer = true;
            }
          vm.$emit("isDrawer", !vm.drawer);
        } 
    },
}
</script>

<style>

</style>