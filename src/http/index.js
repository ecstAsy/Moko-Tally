/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:37:53
 * @LastEditTime: 2023-03-10 15:01:32
 * @LastEditors: ecstAsy
 */

import Request from "./Request";

const Api = {
  user: "/user",
  login: "/user/login"
};

export const UserLogin = async (data) => Request({
  url: Api.login,
  method: 'POST',
  data
})

export const GetUser = async () =>
  Request({
    url: Api.user,
    method: "GET",
  });
