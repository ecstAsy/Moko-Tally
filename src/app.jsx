import { Component } from "react";
import { Provider } from "react-redux";
import "./app.scss";
import dva from "./utils/dva";
import models from "./models";

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();
class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    // this.props.children 是将要会渲染的页面
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
