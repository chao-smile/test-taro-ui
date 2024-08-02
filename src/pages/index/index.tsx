import { View, Image } from '@tarojs/components';
import { useLoad, navigateTo, setStorageSync } from '@tarojs/taro';
import { useState } from 'react';
import { AtButton, AtInput } from 'taro-ui';

export default function Index() {
  const [text, setText] = useState<string | number>('');
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className="at-article">
      <View className="at-article__h1">这是一级标题这是一级标题</View>
      <View className="at-article__info">2017-05-07&nbsp;&nbsp;&nbsp;这是作者</View>
      <View className="at-article__content">
        <View className="at-article__section">
          <View className="at-article__h2">这是二级标题</View>
          <View className="at-article__h3">这是三级标题</View>
          <View className="at-article__p">
            这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
          </View>
          <View className="at-article__p">这是文本段落。这是文本段落。</View>
          <View className="at-article__p">{text}</View>
          <Image
            className="at-article__img w-1/2"
            src="https://download.chaosmile.com/unnamed.png"
            mode="widthFix"
          />
        </View>
      </View>
      <AtInput
        value={text.toString()}
        onChange={setText}
        className="w-1/2 mx-auto h-12"
        name="test"
        placeholder="测试"
      ></AtInput>
      <AtButton
        type="primary"
        circle
        onClick={() => {
          setStorageSync('token', '123');
          navigateTo({
            url: '/pages/about/index',
          });
        }}
      >
        跳转页面
      </AtButton>
    </View>
  );
}
