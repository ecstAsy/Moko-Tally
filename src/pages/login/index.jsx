import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { MLogo } from "@/assets";

import { View, Text, Image, Form, Input, Button } from "@tarojs/components";
import "./index.scss";

const Login = ({ dispatch, common }) => {
  const [loginWay, setLoginWay] = useState("wechat");
  const [errorMsg, setErrorMsg] = useState(false);

  const onSubmit = async (e) => {
    try {
      const res = await dispatch({
        type: "common/login",
        payload: e.detail.value,
      });
      console.log(res);
    } catch (error) {
      return false;
    }
  };

  const onLogin = async () => {};

  return (
    <View className="page-login">
      <View className="weapp-info">
        <Image className="weapp-info-logo" src={MLogo} />
        <Text className="weapp-info-title">摩卡 e 记</Text>
      </View>
      <View className="login-info">
        <Form onSubmit={onSubmit}>
          <View className="login-info-item info-zh">
            <Input
              className="login-info-item-input"
              name="account"
              placeholder="请输入账号/手机号"
            />
          </View>
          <View className="login-info-item info-mm">
            <Input
              className="login-info-item-input"
              name="password"
              type="password"
              placeholder="请输入密码"
            />
          </View>
          <View className="login-info-error">
            {errorMsg && (
              <Text className="login-info-error-toast">
                请输入正确的账号或密码
              </Text>
            )}
          </View>
          <Button className="login-button submit shadow" formType="submit">
            立即登录
          </Button>
        </Form>
      </View>
    </View>
  );
};

export default connect(({ common }) => ({
  common,
}))(Login);
