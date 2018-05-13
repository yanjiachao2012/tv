<template>
	<div class="wrap-preview">
			<el-button class="save-btn" @click="cancelView">
				<i class="el-icon-view"></i>
				停止预览
			</el-button>
			<div class="preview-big animate fadeInDown">
				<swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
					<swiper-slide v-for="item in planItems" :key="item._id">
						<div class="wrap-pic">
						  <img src="../../images/image_wenjianjia.png" v-if="item.type=='folder'" class="folder"/>
						  <video type="video/mp4" :src="item.url" v-else-if="item.type=='video'" class="pic" controls="controls"></video>
						  <img :src="item.url" v-else class="pic" alt="">
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<!-- <div class="preview-small fadeInUp animate">
				<div class="preview-row">
					<el-row :gutter="0" style="margin-right:-10px;
				margin-left:-10px;" class="plan-row">
						<swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
							<swiper-slide v-for="(item,index) in planItems" :key="item._id">
								<planItem :item="item" :index="index"></planItem>
							</swiper-slide>
						</swiper>
					</el-row>
					<div class="swiper-button-prev turn-button" slot="button-prev"></div>
					<div class="swiper-button-next turn-button" slot="button-next"></div>
				</div>
			</div> -->
		</div>
</template>
	<script>
	import {imgBaseUrl} from '../../config/env.js';
	import  planItem from '../../components/common/planItem';
		export default{
			data(){
				return{
					imgUrl: imgBaseUrl,
          swiperOptionTop:{
          	spaceBetween: 0,   
	          loop: false,
	          autoplay: {
	            delay: 5000,
	            disableOnInteraction: false
	          },
	          onTransitionStart(swiper) {
	          	console.log(swiper)
	          }
          },
          swiperOptionThumbs:{
          	spaceBetween: 0,
	          touchRatio: 0.2,
	          centeredSlides: true,
/*		          autoplay:false,*/
	          
	          slidesPerView: 6,
	          loop:false,
	          slideToClickedSlide: true,
	          navigation: {
	            nextEl: '.swiper-button-next',
	            prevEl: '.swiper-button-prev'
	          },
	          breakpoints: {
	            1900: {
	              slidesPerView: 6
	            },
	            1366: {
	              slidesPerView: 5
	            }
	          },
	          touchMove: function(swiper){
				      alert('过渡结束');
				    },
          }
				}
			},

			computed: {
	    },
			components:{
        //swiperSlide,
        planItem
			},
			props:['planItems'],
			mounted(){
				this.$nextTick(() => {
					 
	        /*const swiperTop = this.$refs.swiperTop.swiper
	        const swiperThumbs = this.$refs.swiperThumbs.swiper
	        swiperTop.controller.control = swiperThumbs
	        swiperThumbs.controller.control = swiperTop*/
      })
	      
			},

			watch:{
			},
			methods: {
				cancelView(){
          this.$emit('previewFalse')
	      },
	      toSlide(i) {
	      	console.log()
	        //this.$refs.mySwiper.swiper.slideTo(i, 0)
	      }
	    }
		}
	</script>
	<style lang="scss">
		
	</style>