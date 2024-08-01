import axios from 'axios';

// 创建一个 axios 实例
const request = axios.create({
  baseURL: 'https://notes.chaosmile.com/api',
});

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 如果响应状态码为 200，直接返回响应数据
    if (response.status === 200 && response.data.code !== 200) {
      return response.data;
    } else {
      // 如果响应状态码不为 200，抛出一个错误
      throw new Error(`请求失败，状态码：${response.status}`);
    }
  },
  (error) => {
    // 处理请求错误的情况
    return Promise.reject(error);
  },
);

export default request;
