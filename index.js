// code your solution here
function saturdayFun(activity = "roller-skate"){
 return(`This Saturday, I want to ${activity}!`);   
}
saturdayFun();
function mondayWork(activity = "go to the office"){
    return(`This Monday, I will ${activity}.`);   
   }
   mondayWork();
   function wrapAdjective(symb){
    return function wrapper(mess){
        return `You are ${symb}${mess}${symb}!`
    }
}


