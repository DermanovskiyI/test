// const axios = require('axios');

// const login = document.getElementById('login');
// const pass = document.getElementById('pass');
// const btn = document.querySelector('.auth__btns-link--submit')
// const form = document.querySelector('.auth')
// console.log(form.elements.name, form.elements.password)
// // получение токена
// btn.addEventListener('click', () => {
    
// })
 
// const xhr = new XMLHttpRequest()
// let token;
// const data = {
//     name: login.value,
//     password: pass.value
// }
// xhr.responseType = 'json';
// xhr.open('POST', 'https://webdev-api.loftschool.com/login');
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.send(JSON.stringify(data));
// xhr.addEventListener('load', () => {
//     console.log(xhr)
//     console.log(xhr.status);
//     console.log(xhr.response);
//     // responseStatus = xhr.response.status;
//     // console.log(xhr.response.status)
//     if (xhr.status == 200) {
//         // token = xhr.response
//         // console.log(token)

//     }
// });








// // axios.post('https://webdev-api.loftschool.com/login', {
// //         name: login.value,
// //         password: pass.value
// //     })
// //         .then(function (response) {
// //             // console.log(response.data);
// //             return(response.data)
// //         })
// //         .catch(function (error) {

// //             if (error.response) {

// //                 // Запрос выполнен, и сервер отправил Вам статус код
// //                 // код выпададет из диапазона 2хх (ошибка)
// //                 // errMsg = error.response.data;
// //                 // this.errMsg = error.response;
// //                 console.log(error.response.data);
// //                 console.log(error.response.status);
// //                 console.log(error.response.headers);
// //                 // this.error = true;
// //                 // this.errorMsg = error.response.data.error

// //             }
// //             else if (error.request) {
// //                 // Запрос был сделан, но ответ не получен
// //                 // `error.request` - экземпляр XMLHttpRequest в браузере,
// //                 // http.ClientRequest экземпляр в node.js
// //                 console.log(error.request);
// //             } else {
// //                 // Что-то пошло не так, вернулась ошибка
// //                 console.log('Error', error.message);
// //             }
// //         });