<template>
	<div class="list-add">
		<h3>
			<router-link :to="{ path: '/listshow'}">return</router-link>
		</h3>

		<button @click="add">add</button>
	</div>
</template>

<script>
export default{
	methods : {
		add (){
			var newListData = {
				"title" : "列表"+(+app.list.length+1),
		    "content" : [{
		        "text" : "内容"
		    },{
		        "text" : "内容"
		    },{
		        "text" : "内容"
		    }],
		    "styleObject" : {
		      "left" : 0,
		      "transform" : 0
		    }
			}
			app.list.push(newListData)
		  app.$router.push('/listshow');
		}
	}
}
</script>

<style>

</style>