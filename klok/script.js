function updateklok() {
    const now = new Date();
    const uren = now.getHours();
    const minuten = now.getMinutes();
    const seconden = now.getSeconds();
    const tijdstring = `${uren}:${minuten}:${seconden}`;
    document.getElementById("klok").textContent = tijdstring;
}

updateklok();

setInterval(updateklok, 1000);
