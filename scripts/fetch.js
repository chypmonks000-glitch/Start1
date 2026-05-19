document.addEventListener('DOMContentLoaded', () => {
    navigate('home');
    
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', async e => {
        const item = e.target.closest('.menu_items');

        if (!item) return;


        const page = item.dataset.page;
        const data = await loadPage(page);

        render(data);
    });
});

const loadPage = async page => {
    const res = await fetch(`./data/${page}.json`);
    return res.json();
};

const render = data => {
    const p_title = document.querySelector('.title');
    const p_text = document.querySelector('.text');

    if (p_title && p_text) {
        p_title.textContent = data.title;
        p_text.textContent = data.text;
    }
};
const navigate = async page => {
    const data = await loadPage(page);
    render(data);
}