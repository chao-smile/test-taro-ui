import { View, Swiper, SwiperItem } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { navigateBack, redirectTo, reLaunch } from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { get } from '@/utils';

export default function About() {
  const [data, setData] = useState('');

  useEffect(() => {
    async function name() {
      try {
        const res = await get('/search/fileIn.txt');
        console.log(res);
      } catch (error) {}
    }
    name();
  }, []);

  return (
    <View>
      <Swiper
        className="w-full"
        indicatorColor="#999"
        indicatorActiveColor="#333"
        vertical
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="bg-slate-300 h-96">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="bg-red-500 h-96">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="bg-amber-300 h-96">3</View>
        </SwiperItem>
      </Swiper>
      {data && <View>{data}</View>}
      <AtButton
        type="primary"
        onClick={async () => {
          // navigateBack({
          //   delta: 1,
          // });

          await reLaunch({
            url: '/pages/login/index',
          });
        }}
      >
        返回首页
      </AtButton>
    </View>
  );
}
