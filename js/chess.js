const username = 'scottmangiapane';
const modes = ['rapid', 'bullet', 'blitz'];

const cacheValidity = 4 * 60 * 60 * 1000;

function getFromCache() {
    const chess = window.localStorage.getItem('chess');
    if (!chess) return null;
    const { lastUpdated, payload } = JSON.parse(chess);
    return (lastUpdated > new Date().getTime() - cacheValidity)
        ? payload
        : null;
}

function getFromWeb(cb) {
    fetch(`https://api.chess.com/pub/player/${username}/stats`)
        .then(res => res.json())
        .then(res => {
            window.localStorage.setItem('chess', JSON.stringify({
                payload: res,
                lastUpdated: new Date().getTime()
            }));
            cb(res);
        });
}

function updatePage(data) {
    for (const mode of modes) {
        const lastPlayed = document.getElementById(`chess-${mode}-last-played`);
        const rating = document.getElementById(`chess-${mode}-rating`);
        lastPlayed.innerText = printDate(data[`chess_${mode}`].last.date);
        rating.innerText = data[`chess_${mode}`].last.rating;
    }
}

function printDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
}

window.addEventListener('load', () => {
    const cached = getFromCache();
    if (cached) {
        updatePage(cached);
    } else {
        getFromWeb(data => updatePage(data));
    }
});

