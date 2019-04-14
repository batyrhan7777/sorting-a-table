
let age = document.getElementById('age');
age.addEventListener("click", sortByAge);
function sortByAge(){
    let table = document.getElementById('table');
    let tdList = document.querySelectorAll('table td[data-age]');
    let arr = [];
    for(let i = 0; i < tdList.length; i++){
        arr.push({
            elem: tdList[i].parentElement,
            value: tdList[i].innerHTML
        });
    }
    arr.sort(function(a, b){
        return a.value - b.value;
    });

    for(let i = 0; i < arr.length; i++){
        table.tBodies[0].insertAdjacentElement("beforeEnd", arr[i].elem);
    }
}



// function sortByAge(){
//     let tdList = document.querySelectorAll('td[data-age]');
//     tdList = Array.prototype.slice.call(tdList, 0);
//     tdList.sort(function(a, b){
//         a = Number(a.innerHTML);
//         b = Number(b.innerHTML);
//         return a - b;
//     });

//     let table = document.getElementById('table');
//     for(let i = 0; i < tdList.length; i++){
//         table.tBodies[0].insertAdjacentElement("beforeEnd", tdList[i].parentElement);
//     }
// }