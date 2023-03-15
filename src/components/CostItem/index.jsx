/*
 * @Author: ecstAsy
 * @Date: 2023-03-14 16:49:55
 * @LastEditTime: 2023-03-15 10:00:58
 * @LastEditors: ecstAsy
 */

import { View, Text } from "@tarojs/components";
import "./inedx.scss";

const CostItem = () => {
  return (
    <View className="cost-item">
      <View className="cost-item-label">dd</View>
      <View className="cost-item-value">
        <Text className="subtract">-200</Text>
        <Text className="add">+200</Text>
      </View>
    </View>
  );
};

export default CostItem;
