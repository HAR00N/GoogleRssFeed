<template>
  <v-app-bar
    app
    color="#094ca1"
    clipped-left
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
      text
      color="white"
    >
      <span class="mr-2">Client Page</span>
      <v-icon>mdi-open-in-new</v-icon>
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