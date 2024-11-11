// Get Element
// Must have id/name on html element
const data_1 = document.getElementById("id").innerHTML; // input
const inputForm_1 = document.getElementById("id"); // input
const inputForm_1_2 = document.querySelector("#id"); // input
const inputForm_3 = document.querySelectorAll("[name = 'radio']"); // radio
const inputForm_4 = document.querySelectorAll("[name = 'dropdown']"); // dropdown
const submitForm = document.querySelector("#submitForm"); // submit

// Event Listener Button
// Input
inputForm.addEventListener("input", function (event) {
    const input = event.target.value;

    const returnInput = document.querySelector("#returnInput");
    returnInput.textContent = input;
});
// Radio / Dropdown
inputForm_3.forEach((value) => {
    value.addEventListener("change", function (event) {
        const input = event.target.value;
        const returnInput = document.getElementById("returnInput");

        // IF RADIO
        returnInput.textContent = input;

        // IF DROPDOWN (MAKE IT ARRAY)
        let inputArr = [];
        let index = array.indexOf(value);
        index === -1 ? inputArr.push(value) : inputArr.splice(index, 1);
        returnInput.textContent = inputArr;
    });
});

// Submit
submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    for (const [name, value] of data) {
        console.log(name, value);
    } // or using foreach
});

// Array
let array = [1, 2, 3];
array.push(4); // last in
array.pop(); // last out
array.unshift(0); // first in
array.shift(0); // first out
array.sort(); // asc
array.sort() && array.reverse(); //desc
array.splice(0, 1, -1); //replace 1 number, from index 0, with -1

// Built in Function
array.forEach((param) => {});
array.map((param) => {});
array.reduce((param1, param2) => {}, 0);
array.filter((param1) => {});
array.find((param1) => {});
array.findIndex((param1) => {});
array.every((param1) => {});
array.some((param1) => {});

// Promise 1
function fetchDataById(id) {
    return new Promise((resolve, reject) => {
        let data = dataList.find((data) => data.id === id);
        if (data) {
            resolve(data);
        } else {
            reject("Data not Found"); // or throw new NotFoundException("Data not Found");
        }
    });
}

// Promise 2
async function fetchDataByName(name) {
    let data = dataList.find((data) => data.name === name);
    if (data) {
        return Promise.resolve(data);
    }
    return Promise.reject("Data not Found");
}

// Callback Hell
async function callbackHell() {
    // CALLBACK HELL
    fetchStudentById(1)
        .then((student) => {
            fetchStudentPaymentById(student.id)
                .then((studentPayment) => {
                    console.log(studentPayment);
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
}
