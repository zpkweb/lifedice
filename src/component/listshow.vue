<template>
	<div id="list-show" class="list-show">
		<router-link to="/listadd">new list</router-link>
	  <ul id="list-show-ul" class="list-show-ul" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
	    <li v-for="(list,index) in defaultList" class="list-show-li" :class="'list-show-li-'+index" :style="list.styleObject" @click="editorList(index+1)">
	      <div class="list-show-content">
	        <h3 class="list-show-title">{{list.title}} -- {{index}}</h3>
	        <div class="list-show-desc">
	          <p class="list-show-p" v-for="item in list.content">{{item.text}}</p>
	        </div>
	      </div>
	    </li>
	  </ul>
	</div>
</template>
<script>
export default {
	data(){
		return {
			numActive : 0,
    	numTotal : 0,
			defaultList : {},
			startX : 0,
			startY : 0,
			endX : 0,
			endY : 0
		}
	},
	beforeRouteEnter (to, from, next) {
    next(vm => {
    	vm.defaultList = app.list;
    	vm.numActive = vm.defaultList.length;
    	vm.numTotal = vm.defaultList.length;
    })
  },
	watch : {
	  numActive(){
	    var numActive = this.numActive;
	    var newList = [];
	    var leftWidthTotal = 25;
	    var firstLeftWidth = 5;
	    var leftProportion = numActive ? (leftWidthTotal/(numActive-1)).toFixed(2) : 0;
	    var scaleTotal = 0.1;
	    var scale = numActive ? (scaleTotal/(numActive-1)).toFixed(2) : 0;
	    for(var i=0;i<this.numTotal;i++){
	      this.defaultList[i].index = i;
	      var leftWidth = 0;
	      i<numActive ? leftWidth = firstLeftWidth + (this.defaultList[i].index)*leftProportion +'%' : leftWidth = '100%';
	      var transform = 'scaleY('+(1+(this.defaultList[i].index)*scale)+')';
	      this.defaultList[i].styleObject.left = leftWidth;
	      this.defaultList[i].styleObject.transform = transform;
	    }
	  }
	},
	methods : {
	  editorList(index){
	    app.$router.push('/listitem/'+index)
	  },
	  touchStart(event){
	  	this.startX = this.startY = this.endX = this.endY = 0;
	  	var touch = event.touches[0];
	  	this.startX = touch.pageX;
	  	this.startY = touch.pageY;
	  },
	  touchMove(event){
	  	var touch = event.touches[0];
	  	this.endX = touch.pageX;
	  },
	  touchEnd(event){
	  	if(!this.startX || !this.endX || Math.abs(this.startX-this.endX) < 50){
	  	  return false;
	  	}
	  	var numActive = app.numActive;
	  	var numTotal = app.numTotal;
	  	if((this.startX-this.endX)>0){//left
	  	  if(this.numActive<this.numTotal){
	  	    this.numActive = this.numActive+1
	  	  }
	  	}else{//right
	  	  if(this.numActive>1){
	  	    this.numActive = this.numActive-1
	  	  }
	  	}
	  }
	}
}
</script>
<style>
html,body{
  width: 100%;
  height: 100%;
  color: #484848;
  font-size: 14px;
  font-family: 'Microsoft YaHei';
}
.diceLife{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.list-show{
  width: 100%;
  height: 100%;
  padding: 20% 0;
  overflow: hidden;
}
.list-show-ul{
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}
.list-show-li{
  position: absolute;
  width: 75%;
  height: 100%;
  padding-top: 50px;
  overflow: hidden;
  border: 1px solid #f00;
  background-color: #eee;
  
}
.list-show-content{
  
}

.list-show-title{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-indent: 2em;
  background-color: #ddd;
  border-bottom: 1px solid #ccc;
  margin: 0;
}
.list-show-desc{
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.list-show-p{
  width: 100%;
  height: 16.66%;
  text-indent: 2em;
  margin: 0;
}
</style>