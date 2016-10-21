<template>
	<div class="dice">
		<h3>
			<router-link :to="{ path: '/listitem/' + id }">return</router-link>
			{{msg}}
		</h3>
    <button @click="dice">click</button>
	</div>
</template>
<script>
export default{
	data (){
		return {
			id : '',
			msg : 0
		}
	},
	beforeRouteEnter (to, from, next) {

    next(vm => {
    	vm.id = to.params.id;
    	window.addEventListener('devicemotion',deviceMotionHandler,false);
    	function deviceMotionHandler(eventData){
            // vm.id = (vm.id+1)
            // alert(vm.id)
	    	var SHAKE_THRESHOLD=3000;//定义一个摇动的阈值
	    	var last_update=0;//定义一个变量记录上一次摇动的时间
	    	var x=0
	    	var y=0
	    	var z=0
	    	var last_x=0
	    	var last_y=0;
	    	var last_z=0;//定义x、y、z记录三个轴的数据以及上一次触发的时间
    		//获取含重力加速
    		var acceleration=eventData.accelerationIncludingGravity;
    		var curTime=new Date().getTime();//获取当前时间戳
    		var diffTime=curTime-last_update;
    		if(diffTime>100){
    			last_update=curTime;//记录上一次摇动的时间
    			x=acceleration.x;//获取加速度X方向
    			y=acceleration.y;//获取加速度Y方向
    			z=acceleration.z;//获取加速度垂直方向
    			var speed=Math.abs(x+y+z-last_x-last_y-last_z)/diffTime*10000;//计算阈值
    			if(speed>SHAKE_THRESHOLD){
    				vm.msg++;
    				// alert("摇动了，关闭播放自动播放");
    				// var media=document.getElementById("musicBox");//获取音频控件
    				// media.setAttribute("src","http://192.168.1.125/mohe/upload/audio/20140930/20140930114522_485.mp3");
    				// media.load();//加载音频
    				// media.play();//播放音频
    			}
    			//记录上一次加速度
    			last_x=x;
    			last_y=y;
    			last_z=z;
    		}
    	}


    })
  },
	methods : {
    dice(){
      this.msg++;
    }
  }
}
</script>
<style>
.dice{

}
</style>