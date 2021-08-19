console.log('hi')

//5 falsy values: 0, '', undefined, null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('umesh'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money){
    console.log("Don't spend it all !");

}else{
    console.log("You should get a job");
}

let height = 1;
if(height){
    console.log('YA! Height is defined');

}else{
    console.log('Height is UNDEFINED');
}