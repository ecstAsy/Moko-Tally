/*
 * @Author: ecstAsy
 * @Date: 2023-03-10 14:03:11
 * @LastEditTime: 2023-03-10 14:03:14
 * @LastEditors: ecstAsy
 */

import Taro from "@tarojs/taro";

const getSystemInfo = () => {
  let SystemInfo = Taro.getSystemInfoSync();
  SystemInfo.windowHeight = SystemInfo.windowHeight + 48;
  SystemInfo["RPX"] = SystemInfo.windowWidth / 375;
  let res = SystemInfo.model.indexOf("iPhone X");
  SystemInfo["mobile"] = res === 0 ? "IPhoneX" : "IPhoneY";
  SystemInfo["cate"] =
    SystemInfo.system.indexOf("iOS") > -1 ? "ios" : "android";
  return SystemInfo;
};

export default {
  namespace: "common",
  state: {
    SystemInfo: getSystemInfo(),
    token: null,
    userInfo: null,
  },
  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
