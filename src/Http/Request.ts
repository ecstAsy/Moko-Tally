/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:37:48
 * @LastEditTime: 2023-03-09 16:39:59
 * @LastEditors: ecstAsy
 */

import Taro from "@tarojs/taro";

interface OptionsType {
  url: string;
  method: "GET" | "POST";
  data?: any;
}

const Request = (options: OptionsType) => {
  const { url, method, data } = options;
  console.log(url);

  return Taro.request({
    url: `http://localhost:7001${url}`,
    method,
    data,
    header: {
      "Content-Type": "application/json",
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
