import React from "react";
import ReactDOM from 'react-dom'
import {createStore ,bindActionCreators} from "redux";
import reducer from "./reducer";
import Counter from "./counter";

import *  as actions from "./actions";

const store = createStore(reducer);
const {dispatch} =store ;

const {incAction,decAction,rndAction} = bindActionCreators (actions ,dispatch);





const update = () => {
	ReactDOM.render(<Counter counter={store.getState()} inc={incAction} dec={decAction} rnd={()=>{
		const value = Math.floor(Math.random()*10)
		rndAction(value);
	}}/>,document.getElementById('root'));
};
update();
store.subscribe (update);
