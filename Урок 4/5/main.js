let elems = document.querySelectorAll('td'),
    input = document.querySelector('input');
let arr = [],
    arr1 = [];


function compareNumbers(a, b) {
    return a - b;
}

elems.forEach(function (e, i) {
    arr[i] = parseInt(e.innerHTML);
})

arr.sort(compareNumbers);

input.value = arr.concat(',');