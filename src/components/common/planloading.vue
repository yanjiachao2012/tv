<template>
	<div>
		<el-col class="row animation_opactiy" v-for="item1 in 10" :key="item1">
			<div class="plan-item">
				<div class="plan-image"></div>
				<img src="~@/images/planItem.png" class="back-svg"></div>
		</el-col>
	</div>
	
</template>
	<script>
		export default{
      data(){
     	  return{
          
     	  }
      },
      props:[]
		}
	</script>