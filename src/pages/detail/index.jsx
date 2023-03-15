/*
 * @Author: ecstAsy
 * @Date: 2023-03-14 16:18:27
 * @LastEditTime: 2023-03-14 17:08:42
 * @LastEditors: ecstAsy
 */

import { View } from "@tarojs/components";
import { DailyExpense } from "@/components";

const Detail = () => {
  return (
    <View className="page-detail">
      <View className="page-detail-header">dd</View>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <DailyExpense />
      ))}
    </View>
  );
};

export default Detail;
