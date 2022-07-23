<template>
  <v-navigation-drawer
  :expand-on-hover="expandOnHover"
  floating 
  color="grey"
  clipped
  app
  >
	<v-list 
		v-for="item in menuList" 
		:key="item.idx">

		<v-list-item 
			v-if="!item.child"
			:to="item.to"
			:href="item.href"
			:ripple="false"
			target="_blank"
			active-class=""
			class=""
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
			class=""
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
				active-class="">

				<v-list-item-content>
					<v-list-item-title v-text="child.title"></v-list-item-title>
				</v-list-item-content>

			</v-list-item>
		</v-list-group>
	</v-list>

  </v-navigation-drawer>
</template>

<script>
/* eslint-disable */
export default {
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
				icon: 'mdi-pencil',
				title: 'SR 처리',
				active: false,
				to: '',
			},
			{
				idx: 2,
				icon: 'mdi-pencil',
				title: 'SR',
				active: false,
				child: [
					{idx: 1, title: 'SR 접수', to: ''},
					{idx: 2, title: 'SR 민원', to: null},
				]
			},
			{
				idx: 3,
				icon: 'mdi-github',
				title: 'haroon',
				href: 'https://github.com/HAR00N',
			},
		]
	}),

}
</script>

<style>

</style>