/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:37:53
 * @LastEditTime: 2023-03-09 16:37:54
 * @LastEditors: ecstAsy
 */

import Request from "./Request";

const Api = {
  user: "/user",
};

export const GetUser = async () =>
  Request({
    url: Api.user,
    method: "GET",
  });
