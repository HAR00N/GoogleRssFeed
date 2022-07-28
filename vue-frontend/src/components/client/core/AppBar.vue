<template>
  <v-app-bar app>
    <v-btn 
        elevation="0" 
        :ripple="false" 
        color="transparent" 
        to="/client/main"
        class="ml-4">
        <v-img src="@/assets/dainleaders_color.png" width="200"/>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn        
      color="#bebebe"
      class="mr-1"
      rounded
      elevation="0"
      to="/admin"
    >
      <v-icon color="white">mdi-open-in-new</v-icon>
      <span class="ml-2 white--text">Admin Page</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

.theme--light.v-btn:focus::before {
  display: none;
}
.theme--light.v-btn:hover::before {
  display: none;
}
</style>