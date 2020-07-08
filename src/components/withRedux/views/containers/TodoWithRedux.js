import ListItems from "./ListItems";
import AddListItem from "./AddListItem";
import FormExample from "./FormExample";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import HeaderElement from "src/components/layout/HeaderElement";

import reducers from "src/components/withRedux/reducers/index";

export default () => {
  // const composeEnhancers = window.devToolsExtension && window.devToolsExtension();

  // state
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
    // window.devToolsExtension && window.devToolsExtension()
  );

  return (
    <Provider store={store}>
      <HeaderElement value={"With REDUX now:"}></HeaderElement>
      <AddListItem />
      <ListItems />
      <FormExample />
    </Provider>
  );
};
