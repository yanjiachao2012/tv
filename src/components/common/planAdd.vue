<template>
	<router-link :to="{path:'/library',query:{planId:planId}}" class="grid-content plan-item add-item" tag='div'>
		<div class="plan-image">
			<div class="wrap-btn"> <i class="icon-plus"></i>
				<p class="add-mark">添加</p>
			</div>
		</div>
	</router-link>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:['planId']
	}
</script>