<template>
  <v-navigation-drawer
  :expand-on-hover="expandOnHover"
  floating 
  color="#67A588"
  clipped
  app
  permanent
  >
	<v-list 
		v-for="item in menuList" 
		:key="item.idx"
		expand
		class="pa-2 pr-0 rounded-l-xl"
		>

		<v-list-item 
			v-if="!item.child"
			:to="item.to"
			:href="item.href"
			:ripple="false"
			:target="item.target"
			active-class="menulist teal--text"
			class="ml-1 rounded-l-xl"
			>
			<v-list-item-icon>
				<v-icon>{{item.icon}}</v-icon>
			</v-list-item-icon>
			<v-list-item-title class="" v-text="item.title">

			</v-list-item-title>

		</v-list-item>

		<v-list-group
			v-if="item.child"
			v-model="item.active"
			:prepend-icon="item.icon"
			no-action
			active-class=""
			class="ml-1 pr-0"
			color="white"
			:ripple="false"
			>
			<template v-slot:activator>
				<v-list-item-content >
					<v-list-item-title v-text="item.title"></v-list-item-title>
				</v-list-item-content>
			</template>
			
			<v-list-item
				v-for="child in item.child" 
				:key="child.idx"
				:to="child.to"
				:ripple="false"
				active-class="menulist teal--text"
				class="pr-0 rounded-l-xl"
				>

				<v-list-item-content>
					<v-list-item-title v-text="child.title" class="childitem"></v-list-item-title>
				</v-list-item-content>

			</v-list-item>
		</v-list-group>
	</v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
	components: {
	},
	props: {
		expandOnHover: {
			type: Boolean,
			default: false,
		},
	},
	watch: {
		expandOnHover: function () {
			this.setHoverStyle();
		}
	},
	methods: {
		setHoverStyle: function () {
			let vm = this;
			if (vm.expandOnHover) {
				vm.hoverStyle = "hoverStyle";
			} else {
				vm.hoverStyle = null;
			}
		},
		setExpandStyle: function () {
			let vm = this;
			vm.hoverStyle = "expandStyle"
		}
	},
	data: () => ({
		hoverStyle: null,
		menuList: [
			{
				idx: 1,
				icon: 'mdi-view-dashboard',
				title: '대시보드',
				active: false,
				to: '/admin/dashboard',
			},
			{
				idx: 2,
				icon: 'mdi-cog-outline',
				title: '시스템 관리',
				active: false,
				child: [
					{ idx: 1, title: '사용자 관리', to: '/admin/system/user' },
					{ idx: 2, title: '권한 관리', to: '/admin/system/role' },
				]
			},
			{
				idx: 3,
				icon: 'mdi-pencil',
				title: 'SR 처리',
				active: false,
				to: '/admin/sr',
			},
			{
				idx: 4,
				icon: 'mdi-clipboard-outline',
				title: '운영팀 관리',
				active: false,
				child: [
					{idx: 1, title: '운영팀 관리 1', to: '/admin/team/no1'},
					{idx: 2, title: '운영팀 관리 2', to: '/admin/team/no2'},
				]
			},
			{
				idx: 5,
				icon: 'mdi-chart-bar',
				title: '통계',
				active: false,
				to: '/admin/chart'
			},
		]
	}),

}
</script>

<style scoped>
	.v-navigation-drawer--mini-variant {
		width: 65px !important;
	}
	.v-navigation-drawer--mini-variant .v-navigation-drawer__content .v-list {
		padding-left: 0px !important;
	}
</style>