<template>
	<el-dialog class="preview-dialog" :autoplay='false' :visible.sync="dialogVisible" @close='close'  :fullscreen='true' :show-close="true">
		<el-carousel indicator-position="none" arrow="always">
			<el-carousel-item v-for="item in planItems" :key="item._id">
				<div class="wrap-pic">
					<img src="../../images/image_wenjianjia.png" v-if="item.type=='folder'" class="folder"/>
					<video type="video/mp4" :src="item.url" v-else-if="item.type=='video'" class="pic" controls="controls"></video>
					<img :src="item.url" v-else class="pic" alt="">
				</div>
			</el-carousel-item>
		</el-carousel>
	</el-dialog>
</template>
<script>

	export default{
    data(){
     	 return{
     	 	autoplay:false,
     	 	dialogVisible:true,
     	 }
    },
    components:{
    },
	  props:['planItems'],
	  methods: {
	   	close(){
	   		this.$emit('closeMessage')
	   	},
			cancelBtn(){
				this.$emit('closeMessage')
			},
    }
	}
</script>
	<style lang="scss">
		
	 
	</style>