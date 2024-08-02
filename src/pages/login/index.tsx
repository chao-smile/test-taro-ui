import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { redirectTo } from '@tarojs/taro';

export default function Login() {
  return (
    <View>
      <View className="bg-slate-300 h-96">这是登录页面</View>
      <AtButton
        type="primary"
        onClick={() => {
          redirectTo({
            url: '/pages/index/index',
          });
        }}
      >
        返回首页
      </AtButton>
    </View>
  );
}
