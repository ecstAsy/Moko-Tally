/*
 * @Author: ecstAsy
 * @Date: 2023-03-14 17:07:26
 * @LastEditTime: 2023-03-15 11:24:25
 * @LastEditors: ecstAsy
 */

import { View, Text } from "@tarojs/components";
import CostItem from "../CostItem";
import "./index.scss";

const DailyExpense = () => {
  return (
    <View className="daily-expense">
      <View className="daily-expense-header">
        <View className="daily-expense-header-left">2023年3月14日</View>
        <View className="daily-expense-header-right">
          结余：¥<Text className="expense-sum">1000</Text>
        </View>
      </View>
      <View className="daily-expense-body">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <CostItem />
        ))}
      </View>
      <View className="daily-expense-footer">ddd</View>
    </View>
  );
};

export default DailyExpense;
