/*
 * @Author: ecstAsy
 * @Date: 2023-03-08 17:07:07
 * @LastEditTime: 2023-03-08 17:07:17
 * @LastEditors: ecstAsy
 */

import { create } from "dva-core";
import createLoading from "dva-loading";

let app, store, dispatch, registered;

function createApp(opt) {
  // redux 的日志
  // opt.onAction = [createLogger()];

  app = create(opt);

  app.use(createLoading({}));

  if (!registered) {
    opt.models.forEach((model) => app.model(model));
  }

  registered = true;

  app.start();

  store = app._store;

  app.getStore = () => store;

  app.use({
    onError(err) {
      console.log(err);
    },
  });

  dispatch = store.dispatch;

  app.dispatch = dispatch;

  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
