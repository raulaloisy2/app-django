function init() {

    const LAT = 24.14437;
    const LNG = -110.3005;
    const map = L.map('map').setView([LAT, LNG], 13); 

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.on("click", function (e) {
        const{
            latlng: {lat, lng}
        } = e;
        L.marker([lat, lng]).addTo(map).bindPopup("Esta es una marca");    
    });
}
window.addEventListener("load", init );