var show = document.getElementById('result');
function calcu(num){
    show.value = show.value + num;
}
function Result(){
    try{
        show.value = eval(show.value);
    }
    catch{
        alert("Erorr");
    }
}
function cls(){
    show.value = "";
}
// var result = document.getElementById('result');
// var num1;
// var num2;
// var opt;
// document.getElementById('_1').addEventListener('click', function(){
//     var num = document.getElementById('_1');
//     result.value = result.value + num.value;
// });
// document.getElementById('_2').addEventListener('click', function(){
//     var num = document.getElementById('_2');
//     result.value = result.value + num.value;
// });
// document.getElementById('_3').addEventListener('click', function(){
//     var num = document.getElementById('_3');
//     result.value = result.value + num.value;
// });
// document.getElementById('_4').addEventListener('click', function(){
//     var num = document.getElementById('_4');
//     result.value = result.value + num.value;
// });
// document.getElementById('_5').addEventListener('click', function(){
//     var num = document.getElementById('_5');
//     result.value = result.value + num.value;
// });
// document.getElementById('_6').addEventListener('click', function(){
//     var num = document.getElementById('_6');
//     result.value = result.value + num.value;
// });
// document.getElementById('_7').addEventListener('click', function(){
//     var num = document.getElementById('_7');
//     result.value = result.value + num.value;
// });
// document.getElementById('_8').addEventListener('click', function(){
//     var num = document.getElementById('_8');
//     result.value = result.value + num.value;
// });
// document.getElementById('_9').addEventListener('click', function(){
//     var num = document.getElementById('_9');
//     result.value = result.value + num.value;
// });
// document.getElementById('_0').addEventListener('click', function(){
//     var num = document.getElementById('_0');
//     result.value = result.value + num.value;
// });
// document.getElementById('_point').addEventListener('click', function(){
//     var num = document.getElementById('_point');
//     result.value = result.value + num.value;
// });
// document.getElementById('_c').addEventListener('click', function(){
//     result.value = "";
// });
// document.getElementById('pro').addEventListener('click', function(){
//     num1 = result;
//     result.value = ""; 
//     opt = '*';
// });
// document.getElementById('nag').addEventListener('click', function(){
//     num1 = result;
//     result.value = ""; 
//     opt = '-';
// });
// document.getElementById('plus').addEventListener('click', function(){
//     num1 = result;
//     result.value = ""; 
//     opt = '+';
// });
// document.getElementById('div').addEventListener('click', function(){
//     num1 = result;
//     result.value = "";
//     opt = '/';
// });
// document.getElementById('_equ').addEventListener('click', function(){
//     num2 = result;
//     if(opt = '*'){
//         result.value = parseFloat(num1.value) * parseFloat(num2.value);
//     }else if(opt = '-'){
        
//     }else if(opt = '+'){
        
//     }else if(opt = '/'){
        
//     }else{
//         result.value = "ERROR";
//     }
// });