'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// console.log(firstName) // this is imported from other.js script in html

if(navigator.geolocation)
navigator.geolocation.getCurrentPosition(function(position) {
    const {latitude} = position.coords
    const {longitude} = position.coords
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`)

    const coords = [latitude, longitude]

    const map = L.map('map').setView(coords, 13);
    // console.log(map)

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


/////////// My version
// map.on('click', function(mapEvent) {
//     const clickCoords = mapEvent.latlng
//     console.log(clickCoords)

//     L.marker(clickCoords)
//     .addTo(map)
//     .bindPopup('Workout')
//     .openPopup();
// })

map.on('click', function(mapEvent) {
    const {lat, lng} = mapEvent.latlng


    L.marker([lat, lng])
    .addTo(map)
    .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
    }))
    .setPopupContent('Workout')
    .openPopup();
})

}, function() {
    alert('Could not get your position')
})

console.log('map')