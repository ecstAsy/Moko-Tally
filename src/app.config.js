/*
 * @Author: ecstAsy
 * @Date: 2023-03-10 13:54:29
 * @LastEditTime: 2023-03-14 16:42:13
 * @LastEditors: ecstAsy
 */

export default defineAppConfig({
  pages: [
    // 'pages/login/index',
    'pages/detail/index',
    'pages/create/index',
    'pages/home/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        text: "费用",
        iconPath: "./assets/tab/home-false@3x.png",
        selectedIconPath: "./assets/tab/home-true@3x.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./assets/tab/mine-false@3x.png",
        selectedIconPath: "./assets/tab/mine-true@3x.png",
      },
    ],
    color: "#CAD1DC",
    selectedColor: "#64c6ee",
    borderStyle: "white",
  }
})
