function receivesAFunction(callBack){
    console.log(callBack());
}
receivesAFunction(function(){return "I am a call back function"});
function returnsANamedFunction(){
    let routine = 'studying';
    return function named () {
        console.log(`I love ${routine}.`);
    };
}
function returnsAnAnonymousFunction() {
    let character = 'loving';
    return function(){
        console.log(`He is a ${character} person.`);
    };
}
