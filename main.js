﻿var latitude1 = Number(getParameterByName('latitude1')) || 25.049284;
var longitude1 = Number(getParameterByName('longitude1')) || 121.5760947;
var latitude2 = Number(getParameterByName('latitude2')) || 24.9861694;
var longitude2 = Number(getParameterByName('longitude2')) || 121.5749262;

var demo = getParameterByName('demo') == '1';
console.log(getParameterByName('demo'));
if(demo) {
    lat = 24.987556;
    long = 121.569168;
    var map = L.map('map', {
        center: [lat, long],
        zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var redIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    L.marker(
        [lat, long], { icon: redIcon }
        ).bindPopup(
            '<p class="popup-place">指南路一段道南橋下涵洞附近<p/>' +
            '<p class="popup-text">' + '[轄區]：所屬轄區：台北市政府警察局文山第一分局<p/>' +
            '<p class="popup-text">' + '[聯絡人]：轄區聯絡人：陳警務員、02-27592016、02-27269541<p/>'
        ).addTo(map);
}
else {

var map = L.map('map', {
    center: [(latitude1+latitude2)/2, (longitude1+longitude2)/2],
    zoom: 12
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var orangeIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.marker(
    [latitude1, longitude1], { icon: orangeIcon }
    ).bindPopup(
        '<p class="popup-home">' + '起始點' + '<p/>'
    ).addTo(map);
L.marker(
    [latitude2, longitude2], { icon: orangeIcon }
    ).bindPopup(
        '<p class="popup-home">' + '住家' + '<p/>'
    ).addTo(map);

var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

bottom_lat = Math.min(latitude1, latitude2) - 0.002;
top_lat = Math.max(latitude1, latitude2) + 0.002;
left_long = Math.min(longitude1, longitude2) - 0.002;
right_long = Math.max(longitude1, longitude2) + 0.002;

var csv = $.csv.toObjects(warn_place);
// console.log(csv)
csv.forEach(item => {
    if(item.Latitude >= bottom_lat && item.Latitude <= top_lat
        && item.Longitude >= left_long && item.Longitude <= right_long) {
            L.marker(
                [item.Latitude, item.Longitude], { icon: redIcon }
                ).bindPopup(
                    '<p class="popup-place">' + item.Address + '<p/>' +
                    '<p class="popup-text">' + '[轄區]：'+ item.DeptNm + item.BranchNm + '<p/>' +
                    '<p class="popup-text">' + '[聯絡人]：'+ item.Contact + '<p/>'
                ).addTo(map);
        }
});

}

// var image0Icon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/fysh711426/fysh711426.github.io/master/iMaskMap/image/iMask_back_0.png',
//     iconSize: [86, 86],
//     iconAnchor: [43, 86],
//     popupAnchor: [1, -86]
// });

// var image1Icon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/fysh711426/fysh711426.github.io/master/iMaskMap/image/iMask_back_1.png',
//     iconSize: [86, 86],
//     iconAnchor: [43, 86],
//     popupAnchor: [1, -86]
// });

// var image2Icon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/fysh711426/fysh711426.github.io/master/iMaskMap/image/iMask_back_2.png',
//     iconSize: [86, 86],
//     iconAnchor: [43, 86],
//     popupAnchor: [1, -86]
// });

// var image3Icon = new L.Icon({
//     iconUrl: 'https://raw.githubusercontent.com/fysh711426/fysh711426.github.io/master/iMaskMap/image/iMask_back_3.png',
//     iconSize: [86, 86],
//     iconAnchor: [43, 86],
//     popupAnchor: [1, -86]
// });

// var imageClass = ["image0-icon", "image1-icon", "image2-icon", "image3-icon"];

// var markers = new L.MarkerClusterGroup({
//     iconCreateFunction: function (cluster) {
//         var list = cluster.getAllChildMarkers();
//         var level = 0;
//         for (var i = 0; i < list.length; i++) {
//             if (level < 3 && list[i].options.icon.options.iconUrl === image3Icon.options.iconUrl)
//                 level = 3;
//             else if (level < 2 && list[i].options.icon.options.iconUrl === image2Icon.options.iconUrl)
//                 level = 2;
//             else if (level < 1 && list[i].options.icon.options.iconUrl === image1Icon.options.iconUrl)
//                 level = 1;
//         }
//         return L.divIcon({ html: '<div><span>' + cluster.getChildCount() + '</span></div>', className: "icon-cluster " + imageClass[level], iconSize: [50, 50] });
//     },
//     removeOutsideVisibleBounds: true,
//     animate: true
// }).addTo(map);

// var xhr = new XMLHttpRequest();
// xhr.open('get', 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json');
// xhr.send();
// xhr.onload = function () {
//     var data = JSON.parse(xhr.responseText).features;
//     for (var i = 0; i < data.length; i++) {

//         var imageIcon = image0Icon;
//         if (data[i].properties.mask_adult >= 50)
//             imageIcon = image3Icon;
//         else if (data[i].properties.mask_adult > 20)
//             imageIcon = image2Icon;
//         else if (data[i].properties.mask_adult > 0)
//             imageIcon = image1Icon;

//         var mark = L.marker([
//             data[i].geometry.coordinates[1],
//             data[i].geometry.coordinates[0]
//         ], { icon: imageIcon }
//         ).bindPopup(
//             '<p class="popup-name">' + data[i].properties.name + '<p/>' +
//             '<p class="popup-phone">[電話] ' + data[i].properties.phone + '<p/>' +
//             '<p class="popup-mask">[口罩] 成人: ' + data[i].properties.mask_adult + '、兒童: ' + data[i].properties.mask_child + '<p/>' +
//             '<p class="popup-address">[地址] ' + data[i].properties.address + '<p/>');
//         markers.addLayer(mark);
//     }
//     map.addLayer(markers);
// };