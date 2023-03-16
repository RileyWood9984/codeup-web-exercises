"use strict";

let currentZoom = 10;
let zoomIn = $('.zoomin');
let zoomOut = $('.zoomout');
let html = '';
let searchBox = document.querySelector('#search');
let submit = $('.search');
mapboxgl.accessToken = mapboxKey;
let startLng = 0;
let startLat = 0;
let myMarker;
let markerLngLat;
let myObj;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-98.61738998081711, 29.59831694674604], // starting position [lng, lat]
    zoom: 1,
});

geocode('San Antonio texas 78256', mapboxKey).then(function (results) {
    myObj = {center: {lng: -98.61738998081711, lat: 29.59831694674604}, zoom: 10}
    startLng += results[0];
    startLat += results[1];
    myMarker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(results)
        .addTo(map)
    markerLngLat = myMarker.getLngLat();
    myMarker.on('dragend', onDragEnd);
}).then(function () {
    map.flyTo(myObj)
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${startLat}&lon=${startLng}&appid=${OWAppID}&units=imperial`).done(function (data) {
        fiveDay(data)
    })
});

submit.click(function (e) {
    e.preventDefault()
    geocode(searchBox.value, mapboxKey).then(function (results) {
        myObj = {center: results, zoom: currentZoom}
        let lng = results[0]
        let lat = results[1]
        map.flyTo(myObj)
        myMarker.setLngLat(results);
        myMarker.addTo(map)
        markerLngLat = myMarker.getLngLat();
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${OWAppID}&units=imperial`).done(function (data) {
            fiveDay(data)
        })
    })
})

function onDragEnd() {
    markerLngLat = myMarker.getLngLat();
    $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${markerLngLat.lat}&lon=${markerLngLat.lng}&appid=${OWAppID}&units=imperial`).done(function (data) {
        fiveDay(data)
    })
}

function fiveDay(data) {
    for (let i = 0; i < 33; i += 8) {
        html = ''
        html += `<div class="card forecast"><h5 class="card-title text-center">Weather</h5><h6 class="text-center">${data.list[i].dt_txt.replace('2023-', '').slice(0, -9)}</h6><div class="card-subtitle text-center">${data.list[i].weather[0].description}</div><div class="card-link">Temp: ${parseInt(data.list[i].main.temp)}</div></div>`
        if (i === 0) {
            $(`#day1`).html(html)
        } else {
            $(`#day${(i / 8) + 1}`).html(html)
        }
    }
}

zoomIn.click(function (e) {
    e.preventDefault()
    markerLngLat = myMarker.getLngLat();
    currentZoom += 1
    map.flyTo({center: [markerLngLat.lng, markerLngLat.lat], zoom: currentZoom})
})
zoomOut.click(function (e) {
    e.preventDefault()
    markerLngLat = myMarker.getLngLat();
    currentZoom += -1
    map.flyTo({center: [markerLngLat.lng, markerLngLat.lat], zoom: currentZoom})
})