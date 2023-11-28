//引入的不再是Vue构造函数了,引入的是一个名为createApp的工厂函数
//什么是构造函数,什么是工厂函数? -> 构造函数需要new,工厂函数不再需要new调用了 
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

//挂载App
createApp(App).mount('#app')
