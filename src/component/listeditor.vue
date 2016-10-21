<template>
	<div class="list-editor">
		<h3>
			<router-link :to="{ path: '/listitem/' + id }">return</router-link>
			{{listItem.title}}
			<a href="javascript:;">done</a>
		</h3>
		<ul>
			<li v-for="content in listItem.content">
				<p>{{content.text}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data (){
		return {
			id : '',
			listItem : {}
		}
	},
	beforeRouteEnter (to, from, next) {
    next(vm => {
    	vm.id = to.params.id;
      vm.listItem = listData.data[to.params.id]
    })
  }

}
</script>
<style>
.list-editor{

}
</style>