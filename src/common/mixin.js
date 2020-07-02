import {debounce} from "./utils";
import BackTop from "components/content/backtop/BackTop";
export const imgMixin = {
  data(){
    return {
      imgListener:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.imgListener = () => {
      refresh();
    };
    debounce(this.$bus.$on('imgLoad', this.imgListener))
  }
}
//回到顶部
export const backTopMixin = {
  components:{
    BackTop
  } ,
  data() {
    return {
      isShopBackTop:false,
    }
  },
  methods:{
    showBackTop(position){
      this.isShopBackTop = (-position.y) > 1000 ? true :false
    },
    scrollTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
  }
}
