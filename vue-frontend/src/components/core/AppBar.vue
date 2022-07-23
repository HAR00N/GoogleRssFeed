<template>
    <v-app-bar
      app
      color="#094ca1"
    >
      <v-btn color="transparent" class="mx-1" elevation="0" fab @click="setDrawer()">
        <v-icon v-if="!drawer" color="white"> mdi-text </v-icon>
        <v-icon v-else color="white"> mdi-menu </v-icon>
      </v-btn>
 
      <div class="d-flex align-center">
        <v-img alt= "Dain Logo"
        class="shrink ma-2"
        contain
        src="@/assets/header_logo.svg"
        width="160"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        drawer: true,
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
        } 
    },
}
</script>

<style>

</style>