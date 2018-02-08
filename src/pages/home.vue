<template>
	<div class="wrapper">
		<isheader class="header"></isheader>
		<tabs class='tab'></tabs>
		<tabbar class='tabbar'></tabbar>
	</div>
</template>

<script>
	import isheader from '../components/header'
	import tabs from '../components/teb'
	import tabbar from '../components/tabbar'
	export default {
		components: {
			isheader,
			tabs,
			tabbar
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style scoped="scoped">
	.wrapper {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1;
	}
	
	.tab {
		flex: 1;
		margin: 0.9rem 0 0 0;
	}
	.tabbar{
		margin-bottom: 0.56rem;
	}
</style>