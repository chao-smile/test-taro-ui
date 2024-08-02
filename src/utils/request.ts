import Taro from '@tarojs/taro';

const baseURL = 'https://notes.chaosmile.com/api';
const timeout = 5000;

const handleErrors = (error) => {
  Taro.showToast({
    title: `${error.message || error.statusCode}`,
    icon: 'error',
    duration: 2000,
  });
  return Promise.reject(error);
};

const requestInterceptor = (options) => {
  const token = Taro.getStorageSync('token');
  if (!token) {
    Taro.redirectTo({
      url: '/pages/login/index',
    });
    throw new Error('当前登录已过期');
  }
  options.url = baseURL + options.url;
  options.header = {
    ...options.header,
    'Content-Type': 'application/json',
    Authorization: token,
  };
  return options;
};

// 响应拦截器
const responseInterceptor = (response) => {
  if (response.statusCode !== 200) {
    throw new Error(`错误: ${response.statusCode}`);
  }
  return response.data;
};

const request = async (options) => {
  try {
    const finalOptions = requestInterceptor(options);
    const res = await Taro.request({
      ...finalOptions,
      timeout,
      fail: handleErrors,
    });
    return responseInterceptor(res);
  } catch (error) {
    return handleErrors(error);
  }
};

const get = (url, data = {}, options = {}) => {
  return request({
    ...options,
    url,
    data,
    method: 'GET',
  });
};

const post = (url, data = {}, options = {}) => {
  return request({
    ...options,
    url,
    data,
    method: 'POST',
  });
};

export { get, post };
