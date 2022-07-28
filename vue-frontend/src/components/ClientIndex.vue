<template>
  <v-app>
    <app-bar/>

    <v-main class="pd_x390">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/client/core/AppBar.vue"

export default {

  components: {
    AppBar,
  },

  data: () => ({

  }),

  methods: {
   
  },

}
</script>

<style scoped>
    .pd_x390 {
        padding-left: 390px !important;
        padding-right: 390px !important;
    }
</style>