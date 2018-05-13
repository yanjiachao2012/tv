<template>
  <div style="position:relative;height:100%">
    <el-container>
      <el-header style="height:auto" class="common-header">
        <headtop head-title="全部方案" go-back="true"></headtop>
      </el-header>
      <el-main class="no-padding container-absolute-content">
        <div class="inner-container schemes-main">
          <div class="operate-row textR"> <i class="icon-remove" v-if="allchecked"></i>
            <el-checkbox class="all-checked-btn" v-model="allchecked">全选</el-checkbox>

          </div>
          <el-row :gutter="0" style="margin-right:-14px;margin-left:-14px;" class="schemes-row" :class="{schemeRemove:allchecked}">
            <el-col class="row">
              <div class="schemes-item">
                <div class="floor-points">
                  <span class="point has-point">1</span>
                  <span class="point has-point">2</span>
                  <span class="point has-point">3</span> <i class="el-icon-more"></i>
                </div>
                <div class="schemes-name">方案一</div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlan"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme('afasfasf')">编辑</el-button>
                   </div>
                </div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
            <el-col class="row">
              <div class="schemes-item">
                <div class="floor-points">
                  <span class="point has-point">1</span>
                  <span class="point has-point">2</span>
                </div>
                <div class="schemes-name">方案二</div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlan"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme('方案二')">编辑</el-button>
                    </div>
                </div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
            <el-col class="row">
              <div class="schemes-item">
                <div class="floor-points">
                  <span class="point has-point">1</span>
                  <span class="point has-point">2</span>
                  <span class="point has-point">3</span>
                </div>
                <div class="schemes-name">方案三</div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlan"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme('方案三')">编辑</el-button>
                    </div>
                </div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
            <el-col class="row">
              <div class="schemes-item">
                <div class="floor-points">
                  <span class="point no-point">闲</span>
                </div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlan"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme('方案三')">编辑</el-button>
                    </div>
                </div>
                <div class="schemes-name">方案四</div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
            <el-col class="row">
              <div class="schemes-item">
                <div class="floor-points">
                  <span class="point has-point">ALL</span>
                </div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlan"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme('方案三')">编辑</el-button>
                    </div>
                </div>
                <div class="schemes-name">大厅屏幕2</div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
            <el-col class="row">
              <div class="schemes-item">
                <div class="floor-points">
                  <span class="point has-point">ALL</span>
                </div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlan"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme('方案三')">编辑</el-button>
                    </div>
                </div>
                <div class="schemes-name">大厅屏幕2</div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
            <el-col class="row">
              <div class="schemes-item">
                <div class="floor-points">
                  <span class="point has-point">ALL</span>
                </div>
                <div class="edit-content">
                  <i class="icon-remove" @click="removePlan"></i>

                  <div class="remove-box">
                    <el-button @click="toAddScheme('方案三')">编辑</el-button>
                    </div>
                </div>
                <div class="schemes-name">大厅屏幕2</div>
                <div class="remove-mark">
                  <i class="icon-current"></i>
                </div>
              </div>
            </el-col>
          </el-row>

        </div>
      </el-main>
    </el-container>
    <messagebox v-if="showMessage" remove-box="true" @closeMessage="showMessage = false"></messagebox>
    <transition name="router-slid" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>

</template>
<script>
import headtop from '../../components/common/headTop';
import messagebox from '../../components/common/messageBox.vue';
import {mapMutations} from 'vuex'
export default {
  name: '',
  data () {
    return {
      allchecked:false,
      showMessage:false,
    }
  },
  components: {
    headtop,messagebox,
  },
  methods:{
    ...mapMutations([
          'SCHEME_TITLE'
    ]),
    toAddScheme:function(title,index){
      this.$router.push({
        path:'/schemes/addScheme',
        query: {   
                schemeTitle: title 
            }});
    },
    removePlan(){
         this.showMessage=true;
      }
  }
}
</script>
<style lang="scss">
  .router-slid-enter-active, .router-slid-leave-active {
      transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
      transform: translate3d(2rem, 0, 0);
      opacity: 0;
  }
</style>