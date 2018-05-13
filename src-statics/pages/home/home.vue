<template>
    <el-container  class="common-container content">
      <myleftside></myleftside>
      <el-container>
          <el-header style="height:auto;" class="common-header">
						<headtop head-title='电视管理平台'></headtop>
					</el-header>
					<mymain></mymain>
      </el-container>
    </el-container>
</template>
<script>
import headtop from '../../components/common/headTop';
import myleftside from '../../components/leftside/leftside';
import mymain from '../../components/main/main';
export default {
  name: 'app',
  components: {
    myleftside,
    mymain,
    headtop,
  }
  
}

</script>
<style lang="scss">

</style>