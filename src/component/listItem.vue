<template>
	<div class="list-item">
		<h3>
			<router-link to="/listshow">return</router-link>
			{{listItem.title}}
			<router-link :to="{ path: '/listeditor/' + id }">editor</router-link>
			<button @click="remove">remove</button>
		</h3>
		<ul>
			<li v-for="content in listItem.content">
				<p>{{content.text}}</p>
			</li>
		</ul>
		<router-link :to="{ path: '/dice/' + id }">dice</router-link>

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
    	vm.id = (+to.params.id-1);
      vm.listItem = app.list[+to.params.id-1];
    })
  },
  methods : {
  	remove(){
  		app.list.splice(this.id, 1);
  		app.$router.push('/listshow');
  	}
  }
}
</script>
<style>
.list-item{

}
</style>