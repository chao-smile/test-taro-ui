import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import 'taro-ui/dist/style/index.scss' // 引入组件样式
import './app.less'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
