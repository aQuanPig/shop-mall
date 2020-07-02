import axios from 'axios'


export function request(config) {
  const instance = axios.create({
    // 需要接口的请加coderwhy老师
    baseURL:''
  })
  //请求拦截
  instance.interceptors.request.use(config=>{
      return config
    },err=> {
      console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use(result=>{
    return result.data
  },err=> {
    console.log(err)
  })
  return instance(config)
}
