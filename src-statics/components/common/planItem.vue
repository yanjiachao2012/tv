<template>
	<el-col class="row">
    <div class="grid-content plan-item">
      <div class="plan-image">
        <img src="~@/images/image_picture1.png" class="pic" />
        <span class="mark"></span>
      </div>
      <div class="plan-content">
        <div class="plan-title">色彩设计色彩分好看设计范围得</div>
        <div class="plan-time"> <b class="rank-mark">1</b>
          <el-button class="time">时长5s</el-button>
        </div>
      </div>
      <div class="hover-status">
        <p class="drop-tip">长按可拖拽</p>
        <i class="icon-remove"></i>
        <div class="wrap-input">
          <textarea  class="mutli-input" name="">色彩设计色彩分好看设计范围</textarea>
          <el-input v-model="input" class="single-input" placeholder="请输入内容" value=""></el-input>
        </div>
      </div>
      <div class="remove-mark">
        <i class="icon-current"></i>
      </div>
    </div>
  </el-col>
</template>
	<script>
		export default{
			data(){
				return {
					input:'',
				}
			},
			props:['itemcontent'],
			mounted(){
				console.log(this.itemcontent)
			}

		}
	</script>