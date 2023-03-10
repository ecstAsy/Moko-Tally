import { Component, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import dva from "./utils/dva";
import models from "./models";
import "./app.less";

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
