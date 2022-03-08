function onGeoOk(position) { 
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}

function onGeoError() {
alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
// 유저의 위치를 반환.(유저가 허용) 브라우저에서 기본으로 제공된다.