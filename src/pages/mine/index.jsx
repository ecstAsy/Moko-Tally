/*
 * @Author: ecstAsy
 * @Date: 2023-03-13 09:50:56
 * @LastEditTime: 2023-03-14 15:06:38
 * @LastEditors: ecstAsy
 */
import { View, Image, OpenData } from "@tarojs/components";
import { MAvator } from "@/assets";
import "./index.scss";

const Mine = () => {
  return (
    <View className="container page-mine">
      <View className="mine-info">
        <OpenData className="mine-info-avatar" type="userAvatarUrl"></OpenData>
        <OpenData className="mine-info-nickname" type="userNickName"></OpenData>
      </View>
    </View>
  );
};

export default Mine;
