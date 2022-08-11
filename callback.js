function explain_callback(name, age, task){
    console.log('hello ', name);
    console.log('your age ', age);
    console.log('work ', task);
}
function washHand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('take shower');
}
function scrollFacebook(){
    console.log('scroll facebook but do not like ant post');
}
explain_callback('sogir uddin', 17, washHand());
explain_callback('jogir uddin', 19, takeShower());
explain_callback('kobir uddin', 20, scrollFacebook());