/// yandexMap


// ymaps.ready(init);


// function init() {
//     var myMap = new ymaps.Map("map", {
//             center: [55.980951, 37.130937],
//             zoom: 12,
//             controls: []
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),

//     // Создаем геообъект с типом геометрии "Точка".
//         myGeoObject = new ymaps.GeoObject({
//             // Описание геометрии.
//             geometry: {
//                 type: "Point",
//                 coordinates: [55.99025818, 37.21285228]
//             },
            
//         }, {
//             // Опции.
//             // Иконка метки будет растягиваться под размер ее содержимого.
//             preset: 'islands#blackStretchyIcon',
//             // Метку можно перемещать.
//             draggable: true
//         });
       

//     myMap.geoObjects

//         .add(new ymaps.Placemark([55.99025818, 37.21285228], {
//             balloonContent: 'ЗДАРОВА',
//             iconCaption: 'АГА'
//         }, {
//             preset: 'islands#blueCircleDotIconWithCaption',
//             iconCaptionMaxWidth: '500'
//         }));


//         myMap.behaviors
//         // Отключаем выключенное поведение:
//         //  - scrollZoom - зум по скроллу
//         .disable(['scrollZoom'])
// }


//// HAMBURGER

// const hamburger = document.querySelector('.hamburger');
// const hamburgerMenu = document.querySelector('.hamburger__menu');
// const popup = document.getElementById('popup');
// const body = document.querySelector('body');

// hamburger.addEventListener('click', function(e) {
//     if(e.target.classList.contains('hamburger__menu') || e.target.classList.contains('hamburger')) {
//         hamburgerMenu.classList.toggle('hamburger__menu--animated');
//         popup.classList.toggle('popup--active');
//         body.classList.toggle('body--without-scroll');
//     }

// })



//auth

