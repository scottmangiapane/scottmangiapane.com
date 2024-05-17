const groups = [
    ['card-clicks', 'calculator-v2'],
    ['podfish', 'calcnotes', 'db-manager']
];

const duration = 220;

function fade(object, opacity) {
    object.animate({ opacity }, { duration: duration, queue: false });
}

const getCard = (name) => document.getElementById('card-' + name);

const getDemo = (name) => document.getElementById('demo-' + name);

window.addEventListener('load', () => {
    for (const group of groups) {
        getDemo(group[0]).style.opacity = 1;
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
});
