/*
 * @Author: ecstAsy
 * @Date: 2023-03-13 09:55:50
 * @LastEditTime: 2023-03-14 15:55:23
 * @LastEditors: ecstAsy
 */
import { View } from "@tarojs/components";
import "./index.scss";
const Home = () => {
  return (
    <View className="page-home">
      {[1, 2, 3, 4].map((item) => (
        <View className="home-card">
          <View className="home-card-name">卡片空间</View>
        </View>
      ))}
    </View>
  );
};

export default Home;
