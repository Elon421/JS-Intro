const score = {
    gewonnen: 0,
    verloren: 0,
    gelijkspel: 0,
};

function kiescomputermove() {
    const moves = ['steen', 'papier', 'schaar'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}

function spelen(spelermove) {
    const computermove = kiescomputermove();
    let result = '';

    if (spelermove === 'schaar') {
        if (computermove === 'steen') {
            result = 'Je hebt verloren';
            score.verloren++;
        } else if (computermove === 'papier') {
            result = 'Je hebt gewonnen';
            score.gewonnen++;
        } else if (computermove === 'schaar') {
            result = "Gelijkspel";
            score.gelijkspel++;
        }
    } else if (spelermove === 'papier') {
        if (computermove === 'steen') {
            result = 'Je hebt gewonnen';
            score.gewonnen++;
        } else if (computermove === 'papier') {
            result = 'Gelijkspel';
            score.gelijkspel++;
        } else if (computermove === 'schaar') {
            result = 'Je hebt verloren';
            score.verloren++;
        }
    } else if (spelermove === 'steen') {
        if (computermove === 'steen') {
            result = 'Gelijkspel';
            score.gelijkspel++;
        } else if (computermove === 'papier') {
            result = 'Je hebt verloren';
            score.verloren++;
        } else if (computermove === 'schaar') {
            result = 'Je hebt gewonnen';
            score.gewonnen++;
        }
    }

    const message = `Jij koos: ${spelermove}, de computer koos: ${computermove}. ${result}.\n\nHuidige stand - Gewonnen: ${score.gewonnen}, Verloren: ${score.verloren}, Gelijkspel: ${score.gelijkspel}`;
    alert(message);

    if (result === 'Je hebt gewonnen') {
        alert("Gefeliciteerd! Je hebt gewonnen!");
    } else if (result === 'Je hebt verloren') {
        alert("Helaas, je hebt verloren.");
    }
}

function resetScore() {
    score.gewonnen = 0;
    score.verloren = 0;
    score.gelijkspel = 0;
    alert("Scores zijn gereset naar 0.");
}

spelen('steen');
spelen('papier');
spelen('schaar');


