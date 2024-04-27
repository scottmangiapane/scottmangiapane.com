const username = 'scottmangiapane';
const modes = ['rapid', 'bullet', 'blitz'];

window.addEventListener('load', () => {
    fetch(`https://api.chess.com/pub/player/${username}/stats`)
        .then(res => res.json())
        .then(res => {
            for (const mode of modes) {
                const lastPlayed = document.getElementById(`chess-${mode}-last-played`);
                const rating = document.getElementById(`chess-${mode}-rating`);
                lastPlayed.innerText = printDate(res[`chess_${mode}`].last.date);
                rating.innerText = res[`chess_${mode}`].last.rating;
            }
        });
});

function printDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString();
}
