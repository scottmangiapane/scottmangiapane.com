const startDate = new Date('2019-07-08');

function getExperience() {
    const now = new Date();
    const years = new Date(now - startDate).getUTCFullYear() - 1970;
    return `${years}+ years`;
}

window.addEventListener('load', () => {
    const yoe = document.getElementById('yoe');
    yoe.innerText = getExperience();
});
