<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  BScroll.use(Pullup)
  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null,
      }
    },
    props:{
      isPullUpLoad:{
        type:Boolean,
        default:false
      },
      whatProbeType:{
        type:Number,
        default:1
      }
    },
    mounted() {
      // console.log(this.$refs.scroll)
      //初始化scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: this.isPullUpLoad,
        probeType:this.whatProbeType
      })
      //是否回到顶部
      if (this.whatProbeType === 2 || this.whatProbeType === 3){
        this.whatProbeType && this.scroll.on('scroll',(position)=>{
          this.$emit('showBackTop',position)
          this.$emit('scrollPositon',position)
        })
      }
      //上拉加载更多
      if(this.isPullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('onPullingUp')
        })
      }
      console.log(this.scroll)
    },
    methods:{
      //回到顶部
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      //刷新
      refresh(){
        this.scroll && this.scroll.refresh()
      },
      finishLoad(){
        this.scroll && this.scroll.finishPullUp()
      } ,
      //获取Y值
      getPositionY(){
        console.log(this.scroll)
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
