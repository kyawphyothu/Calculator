let input = document.querySelector('.input');
let number = document.querySelectorAll('.number');
let c = document.querySelector('.c');
let del = document.querySelector('.del');
let special = document.querySelectorAll('[class="special"]');
let eql = document.querySelector('.eql');

number.forEach(function(i){
    i.addEventListener('click', function(){
        input.value += i.textContent;
    })
})

c.addEventListener('click', function(){
    input.value = '';
})

del.addEventListener('click', function(){
    let inputValue = input.value;
    inputValue = inputValue.slice(0, -1);
    // console.log(inputValue);
    input.value = inputValue;
})

special.forEach(function(i){
    i.addEventListener('click', function(){
        console.log(i.id);
        input.value += i.id;
    })
})

eql.addEventListener('click', function(){
    let result = eval(input.value);
    input.value = result;
})