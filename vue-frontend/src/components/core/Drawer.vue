<template>
  <v-navigation-drawer
  :expand-on-hover="expandOnHover"
  floating 
  color="#67A588"
  clipped
  app
  >
	
	<!-- <user-profile :expandOnHover="expandOnHover"/> -->
	
	<v-list 
		v-for="item in menuList" 
		:key="item.idx">

		<v-list-item 
			v-if="!item.child"
			:to="item.to"
			:href="item.href"
			:ripple="false"
			:target="item.target"
			active-class="menulist"
			class="mx-4 white--text"
			>
			<v-list-item-icon>
				<v-icon>{{item.icon}}</v-icon>
			</v-list-item-icon>
			<v-list-item-title v-text="item.title">

			</v-list-item-title>

		</v-list-item>

		<v-list-group
			v-if="item.child"
			v-model="item.active"
			:prepend-icon="item.icon"
			no-action
			active-class=""
			class="mx-4 white--text"
			color="white"
			:ripple="false"
			>
			<template v-slot:activator>
				<v-list-item-content>
					<v-list-item-title v-text="item.title"></v-list-item-title>
				</v-list-item-content>
			</template>
			
			<v-list-item
				v-for="child in item.child" 
				:key="child.idx"
				:to="child.to"
				:ripple="false"
				active-class="menulist"
				color="white">

				<v-list-item-content>
					<v-list-item-title v-text="child.title"></v-list-item-title>
				</v-list-item-content>

			</v-list-item>
		</v-list-group>
	</v-list>

  </v-navigation-drawer>
</template>

<script>
// import UserProfile from '@/components/UserProfile.vue'
export default {
	components: {
		// UserProfile
	},
	props: {
		expandOnHover: {
			type: Boolean,
			default: false,
		},
	},
	data: ()=> ({
		menuList: [
			{
				idx: 1,
				icon: 'mdi-home',
				title: 'Home',
				active: false,
				to: '/',
			},
			{
				idx: 2,
				icon: 'mdi-pencil',
				title: 'SR 처리',
				active: false,
				to: '/pages/ServiceHandle',
			},
			{
				idx: 3,
				icon: 'mdi-clipboard-outline',
				title: 'SR',
				active: false,
				child: [
					{idx: 1, title: 'SR 접수', to: '/pages/SR/ServiceRequest'},
					{idx: 2, title: 'SR 민원', to: '/pages/SR/ServiceComplain'},
				]
			},
			{
				idx: 4,
				icon: 'mdi-newspaper-variant-outline',
				title: 'Google News',
				active: false,
				to: '/pages/GoogleNews',
			},
			{
				idx: 5,
				icon: 'mdi-github',
				title: 'HAR00N',
				// href: 'https://github.com/HAR00N',
				target: '_blank',
			},
		]
	}),

}
</script>

<style>

</style>