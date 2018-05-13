<template>
	<div class="myTime-select">
	  <el-checkbox-group v-model="checkboxWeek" @change="change">
      <el-checkbox-button v-for="item in weekday" class="weekday-item"  :label="item.value" :key="item.label">{{item.label}}</el-checkbox-button>
    </el-checkbox-group>
		<div class="time-part" >
			<span class="time-name">开始时间</span>
			<el-time-select class="my-time" size="small" prefix-icon='el-icon-arrow-down' clear-icon="" :editable='false' v-model="startTime" :picker-options="{
	      start: '08:30',
	      step: '00:15',
	      end: '18:30'
	    }" @change="changeStart">
	    </el-time-select>
		</div>
		<div class="time-part">
			<span class="time-name">结束时间</span>
			<el-time-select class="my-time" size="small" prefix-icon='el-icon-arrow-down' clear-icon="" :editable='false' v-model="endTime"  :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }" @change="changeEnd">
    	
    </el-time-select>
		</div>
    
    
		
	</div>

</template>
<script>
	export default{
	  data(){
	  	return{
	  		startTime: '08:30',
        endTime: '20:00',
        checkboxWeek:[],
        weekday:[
        {label:'星期一',value:0},
        {label:'星期二',value:1},
        {label:'星期三',value:2},
        {label:'星期四',value:3},
        {label:'星期五',value:4},
        {label:'星期六',value:5},
        {label:'星期日',value:6},
        ]
	  	}
	  },
	  methods:{
      change(){
      	console.log(this.checkboxWeek)
      },
      changeStart(){
      	console.log(new Date('2018/5/2 '+this.startTime).getTime())
      },
      changeEnd(){
      	console.log(new Date('2018/5/2 '+ this.endTime).getTime())
      }
	  }
  }
</script>
<style lang="scss">
	
</style>