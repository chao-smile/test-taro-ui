import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtButton type='primary'>Button</AtButton>
    </View>
  )
}
