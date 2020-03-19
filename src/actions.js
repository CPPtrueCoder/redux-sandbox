export const incAction= ()=>({type:'INC'});
export const decAction= ()=>({type:'DEC'});
export const rndAction= ()=> {

return	{type:'RND',
	payload:Math.floor(Math.random () * 10)};
	
};
	
