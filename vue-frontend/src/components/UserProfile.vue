<template>
  <v-card 
	v-if="!expandOnHover"
	elevation="0" 
	class="pa-4 ma-4" 
	color="transparent" 
	height="70">
		<v-row>
			<v-col cols="12" md="3">
				<v-avatar size="40">
					<v-img src="@/assets/user_img.png"/>
				</v-avatar>
			</v-col>
			<v-col cols="12" md="9" class="">
				<v-container>
					<v-row>
						<h4>ㅇㅇㅇ님</h4>
					</v-row>
					<v-row>
						<h5 class="font-weight-light">최종 접속일 : 07.23</h5>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-card>
	<v-img v-else src="@/assets/user_img.png"/>
</template>

<script>
export default {
	props: {
		expandOnHover: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style>

</style>