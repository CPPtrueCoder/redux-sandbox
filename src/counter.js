import React from "react";

const Counter = ({counter,inc,dec,rnd}) => {
	return (
		<div id="root" className="jumbotron">
			<h2 id="counter">
				{counter}
			</h2>
			<button id="dec" onClick={dec} className="btn btn-primary btn-lg">
				DEC
			</button>
			<button id='inc' onClick={inc} className="btn btn-primary btn-lg">
				INC
			</button>
			<button id='rnd' onClick={rnd} className="btn btn-primary btn-lg">
				RND
			</button>
		</div>
	)
};
export default Counter;