const groups = [
    ['card-cliques', 'quackcryption', 'calculator-v2'],
    ['truth-table-generator', 'nix-js'],
    ['ti-games', 'alphacs', 'ti-terminal']
];

const duration = 220;

function fade(object, opacity) {
    object.animate({ opacity }, { duration: duration, queue: false });
}

function getCard(name) {
    return document.getElementById('card-' + name);
}

function getDemo(name) {
    return document.getElementById('demo-' + name);
}

window.onload = () => {
    for (const group of groups) {
        const demo = getDemo(group[0]);
        demo.style.opacity = 1;
    }

    for (group of groups) {
        for (const name of group) {
            const card = getCard(name);
            const demo = getDemo(name);
            const otherDemos = group
                .filter(item => item !== name)
                .map(item => getDemo(item));
            card.onmouseover = () => {
                fade(demo, 1);
                setTimeout(() => { demo.style.opacity = 1 }, duration);
                for (const otherDemo of otherDemos) {
                    fade(otherDemo, 0);
                    setTimeout(() => { otherDemo.style.opacity = 0 }, duration);
                }
            };
        }
    }
};