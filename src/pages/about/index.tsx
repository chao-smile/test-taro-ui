import { View, Swiper, SwiperItem } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { navigateBack } from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { request } from '@/utils';

export default function About() {
  const [data, setData] = useState('');

  useEffect(() => {
    request.get('/search/fileIn.txt').then((res) => {
      console.log(res);
      setData(JSON.stringify(res));
    });
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
        onClick={() => {
          navigateBack({
            delta: 1,
          });
        }}
      >
        返回首页
      </AtButton>
    </View>
  );
}
