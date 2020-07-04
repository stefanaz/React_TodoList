import ListItems from './ListItems'
import FormExample from './FormExample'
import React, { useState } from "react";
import { createStore, applyMiddleware } from "redux"
import {Provider, connect} from 'react-redux'
import thunk from "redux-thunk" 

import reducers from 'src/reducers/index'


export default () => {
  

  const composeEnhancers = window.devToolsExtension && window.devToolsExtension();

  // state
  const store = createStore(
    reducers, {}, 
    applyMiddleware(thunk)
    // window.devToolsExtension && window.devToolsExtension()
  );

 
  return (
    <Provider store={store}>
      <ListItems/>
      <FormExample/>
    </Provider>
    
  )

}
