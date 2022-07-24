<template>
  <v-app-bar
    app
    color="#094ca1"
    clipped-left
    height="50"
  >
    <v-btn 
      color="transparent" 
      class="ml-1 px-0"
      elevation="0" 
      small
      @click="setDrawer()"
      >
        <v-icon v-if="drawer" color="white"> mdi-text </v-icon>
        <v-icon v-else color="white"> mdi-menu </v-icon>
    </v-btn>

    <div class="d-flex align-center">
      <v-img alt= "Dain Logo"
      class="shrink"
      contain
      src="@/assets/DainWhite.png"
      width="160"
      />
    </div>

    <v-spacer></v-spacer>

    <v-btn        
      color="#165BB4"
      class="mr-4"
      rounded
      elevation="0"
    >
      <v-icon color="white">mdi-open-in-new</v-icon>
      <span class="ml-2 white--text">Client Page</span>
    </v-btn>

    <v-btn small fab color="#165BB4" elevation="0">
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