ymaps.ready(init);


function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.980951, 37.130937],
            zoom: 12,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.99025818, 37.21285228]
            },
            
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });
       

    myMap.geoObjects

        .add(new ymaps.Placemark([55.99025818, 37.21285228], {
            balloonContent: 'ЗДАРОВА',
            iconCaption: 'АГА'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '500'
        }));


        myMap.behaviors
        // Отключаем выключенное поведение:
        //  - scrollZoom - зум по скроллу
        .disable(['scrollZoom'])
}