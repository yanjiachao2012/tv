<template>
	<div class="wrap-preview">
			<el-button class="save-btn" @click="cancelView">
				<i class="el-icon-view"></i>
				停止预览
			</el-button>
			<div class="preview-big animate fadeInDown">
				<swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
					<swiper-slide>
						<div class="wrap-pic">
							<img src="~@/images/image_picture1.png" class="pic"/>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="wrap-pic">
							<img src="~@/images/image_picture2.png" class="pic"/>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="wrap-pic">
							<img src="~@/images/image_picture3.png" class="pic"/>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="wrap-pic">
							<img src="~@/images/image_picture4.png" class="pic"/>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="wrap-pic">
							<img src="~@/images/image_picture5.png" class="pic"/>
						</div>
					</swiper-slide>
					<swiper-slide>
						<div class="wrap-pic">
							<img src="~@/images/image_picture6.png" class="pic"/>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="preview-small fadeInUp animate">
				<div class="preview-row">
					<el-row :gutter="0" style="margin-right:-10px;
				margin-left:-10px;" class="plan-row">
						<swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
							<swiper-slide>
								<div class="grid-content plan-item">
									<div class="plan-image">
										<img src="../../images/image_picture1.png" class="pic" />
									</div>
									<div class="plan-content">
										<div class="plan-title">色彩设计色彩分好看设计范围得</div>
										<div class="plan-time">
											<b class="rank-mark">1</b>
											<el-button class="time">时长5s</el-button>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="grid-content plan-item">
									<div class="plan-image">
										<img src="../../images/image_picture2.png" class="pic" />
									</div>
									<div class="plan-content">
										<div class="plan-title">色彩设计色彩分好看设计范围得</div>
										<div class="plan-time">
											<b class="rank-mark">1</b>
											<el-button class="time">时长5s</el-button>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="grid-content plan-item">
									<div class="plan-image">
										<img src="../../images/image_picture3.png" class="pic" />
									</div>
									<div class="plan-content">
										<div class="plan-title">色彩设计色彩分好看设计范围得</div>
										<div class="plan-time">
											<b class="rank-mark">1</b>
											<el-button class="time">时长5s</el-button>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="grid-content plan-item">
									<div class="plan-image">
										<img src="../../images/image_picture4.png" class="pic" />
									</div>
									<div class="plan-content">
										<div class="plan-title">色彩设计色彩分好看设计范围得</div>
										<div class="plan-time">
											<b class="rank-mark">1</b>
											<el-button class="time">时长5s</el-button>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="grid-content plan-item">
									<div class="plan-image">
										<img src="../../images/image_picture5.png" class="pic" />
									</div>
									<div class="plan-content">
										<div class="plan-title">色彩设计色彩分好看设计范围得</div>
										<div class="plan-time">
											<b class="rank-mark">1</b>
											<el-button class="time">时长5s</el-button>
										</div>
									</div>
								</div>
							</swiper-slide>
							<swiper-slide>
								<div class="grid-content plan-item">
									<div class="plan-image">
										<img src="../../images/image_picture6.png" class="pic" />
									</div>
									<div class="plan-content">
										<div class="plan-title">色彩设计色彩分好看设计范围得</div>
										<div class="plan-time">
											<b class="rank-mark">1</b>
											<el-button class="time">时长5s</el-button>
										</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
					</el-row>
					<div class="swiper-button-prev turn-button" slot="button-prev"></div>
					<div class="swiper-button-next turn-button" slot="button-next"></div>
				</div>
        
			</div>
		</div>
</template>
	<script>
	//https://surmon-china.github.io/vue-awesome-swiper/
	//import { swiper, swiperSlide } from 'vue-awesome-swiper';

		export default{
			data(){
				return{
          swiperOptionTop:{
          	spaceBetween: 0,   
            loop: false,
          },
          swiperOptionThumbs:{
          	spaceBetween: 0,
	          touchRatio: 0.2,
	         centeredSlides: true,
	          autoplay:false,
	          slidesPerView: 5,
	          loop: false,
	          slideToClickedSlide: true,
	          navigation: {
		            nextEl: '.swiper-button-next',
		            prevEl: '.swiper-button-prev'
		          }
          }
				}
			},

			computed: {
	    },
			components:{
        //swiperSlide,
        //swiper
			},
			mounted(){
				this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
	      
			},

			watch:{
			},
			methods: {
				cancelView(){
          this.$emit('previewFalse')
	      }
	    }
		}
	</script>
	<style lang="scss">
		
	</style>