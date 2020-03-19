import {createStore} from "redux";
const inc = document.getElementById('inc'),
	dec = document.getElementById('dec'),
	counter=document.getElementById('counter'),
	rnd=document.getElementById('rnd');

const incAction= ()=>({type:'INC'});
const decAction= ()=>({type:'DEC'});
const rndAction= (payload)=>({type:'RND',payload});



const reducer = (state = 0, action) => {
	
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return state + action.payload;
		default:
			return state;
	}
};

const store = createStore (reducer);
inc.addEventListener('click',()=>{
	store.dispatch(incAction());
});
dec.addEventListener('click',()=>{
	store.dispatch(decAction());
});
rnd.addEventListener('click',()=>{
	const payload = Math.floor(Math.random()*10);
	store.dispatch(rndAction(payload));
});
const update =()=>{
counter.innerHTML= store.getState();
};
store.subscribe(update);