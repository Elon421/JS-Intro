function conversie() {
    let breedte = document.getElementById('breedte').value;
    let hoogte = document.getElementById('hoogte').value;
    let lengte = document.getElementById('lengte').value;
    let volume = breedte * hoogte * lengte;
    let gallons = volume * 0.2641720524;
    document.getElementById('output').value = gallons.toString();
}
