import {createStore} from "redux";
const inc = document.getElementById('inc'),
	dec = document.getElementById('dec'),
	counter=document.getElementById('counter');
const reducer = (state = 0, action) => {
	
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		default:
			return state;
	}
};

const store = createStore (reducer);
inc.addEventListener('click',()=>{
	store.dispatch({type:'INC'});
});
dec.addEventListener('click',()=>{
	store.dispatch({type:'DEC'});
});

const update =()=>{
counter.innerHTML= store.getState();
};
store.subscribe(update);