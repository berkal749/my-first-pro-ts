let userd = {
  name: "qq",
  number: 88,
};
function ob({ name: string, n: boolean }): object {
  return {};
}
ob({name:"hhh",n:true});
function reObject():{name:string}{
return{name:"lol"};

}


type user ={
 readonly _id:string;
    name:string;
    email: string;
    paied:boolean;
    cred?:number;
}
function createUser(user:user){


}
let User :user ={
      _id:"ahh",
    name:"ahhh",
    email: "ahhh",
    paied:true,





}
type usedv = user & userd ;
export {};
