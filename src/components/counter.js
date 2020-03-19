import React from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import * as actions from '../actions'

const Counter = ({counter, incAction, decAction, rndAction}) => {
	return (
		<div id="root" className="jumbotron">
			<h2 id="counter">
				{counter}
			</h2>
			<button id="dec" onClick={decAction} className="btn btn-primary btn-lg">
				DEC
			</button>
			<button id='inc' onClick={incAction} className="btn btn-primary btn-lg">
				INC
			</button>
			<button id='rnd' onClick={rndAction} className="btn btn-primary btn-lg">
				RND
			</button>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		counter: state
	}
};


export default connect (mapStateToProps,actions) (Counter);