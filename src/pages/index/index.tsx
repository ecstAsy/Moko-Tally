import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { GetUser } from "../../Http";
import "./index.less";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  async componentDidMount() {
    const res = await GetUser();
    console.log(res);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
