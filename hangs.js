let i = 0;
let j = 0;
let buttons = document.querySelectorAll(".page")
const maxAttempts = 5;
const fruits = ["guava", "grapes", "strawberry", "pomegranate", "velenciaorange", "jackfruit"];
const animals = ["lion", "elephant", "tiger", "giraffe", "zebra", "monkey", "kangaroo", "panda", "crocodile", "koala"];
const cars =["volvo","MercedesBenz","Porsche","ford","skoda","ferrari","thar","rangerover"]
let originalWord = "";
let btt;
let arr = [fruits, animals,cars]
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        btt = button.value;
       
        localStorage.setItem('selectedCategory', btt);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    btt = localStorage.getItem('selectedCategory');
});

function main() {
    let arra = arr[btt]
    let values = document.getElementById("answer");
    const index = Math.floor(Math.random() * arra.length);
    let word = arra[index];
    let m=word.length;
    originalWord = word;
    const asterisks = '*'.repeat(word.length);
    values.value = asterisks;
    i = 0;
    j = 0;
    document.getElementById('zero').innerHTML = '';
    // document.getElementById("out").innerHTML = '';

    if(arra==fruits){
        document.getElementById("indication").innerHTML="Enter the " +m+ " letter fruit "
    }
    if(arra==animals){
        document.getElementById("indication").innerHTML="Enter the " +m+ " letter animal "
    }
    if(arra==cars){
        document.getElementById("indication").innerHTML="Enter the " +m+ " letter cars "
    }
}

function check(event) {
    const charCode = event.which || event.keyCode;
    const isAlphabeticKey = (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);

    if (!isAlphabeticKey) {
        document.getElementById("input").value = '';
        return;
    }

    const a = document.getElementById("input").value.toLowerCase();
    const input = document.getElementById("answer");
    const d2 = document.getElementById('zero');

    if (originalWord.charAt(i) == (a.charAt(i))) {
        input.value = input.value.substr(0, i) + originalWord.charAt(i) + input.value.substr(i + 1);
        i++;

        if (input.value === originalWord) {
            document.getElementById("zero").innerHTML = "<span style='color:green;'>✨Congratulations!<br></span>";
        }
    } else {
        document.getElementById("input").value = a.substr(0, a.length - 1);
        if (j < maxAttempts) {
            const stages = ['😖<br>', ' &nbsp |<br>', '&nbsp/\\<br>', '&nbsp |<br>', '&nbsp/\\<br>'];
            document.getElementById("out1").innerHTML = "you lost "+(j+1)+" chance out of 5";
            d2.innerHTML += stages[j];
            j++;
        } else {
            d2.innerHTML = "<span style='color:red;'>GAMEOVER!</span>";
        }
    }
}

function generateArray(arrayType) {
    if (arrayType === 'fruits') {
        currentArray = fruits;
    } else if (arrayType === 'animals') {
        currentArray = animals;
    }
    main();
}