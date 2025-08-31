let score:number| string = 33


function y(score:number|string){
//u nedd to verfiy befor using deault methods
if(typeof score === "string"){


    score.toLowerCase();
}else{
     score+=2;
}

}
const data:(string|number)[] = [1,2,"E"];

let seat : "window"|"middle";
seat="crew";