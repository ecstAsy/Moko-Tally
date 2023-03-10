/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:37:48
 * @LastEditTime: 2023-03-10 17:56:42
 * @LastEditors: ecstAsy
 */

import Taro from "@tarojs/taro";


const Request = (options) => {
  const { url, method, data } = options;
  console.log(url);

  return Taro.request({
    url: `http://localhost:7001/api/v1${url}`,
    method,
    data,
    header: {
      "Content-Type": "application/json",
      ctoken: 'ss'
    },
  })
    .then((res) => {
      console.log(res);
      const { statusCode, data } = res;
      if (statusCode >= 200 && statusCode < 300) {
        return data;
      }
    })
    .catch(() => {
      Taro.showToast({
        icon: "none",
        title: "系统出错！",
        mask: true,
      });
    });
};

export default Request;
