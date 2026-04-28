function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            initComponents();
        });
}

function initComponents() {
    document.querySelectorAll('.dot-pattern-component').forEach(el => {
        el.classList.add('dot-pattern');
        el.style.bottom = el.dataset.bottom || '0';
        el.style.height = el.dataset.height || '20px';
    });

    document.querySelectorAll('.glass-box-component').forEach(el => {
        el.classList.add('glass-box');
        el.style.bottom = el.dataset.bottom || '0';
        el.style.height = el.dataset.height || '100px';
        el.style.width = el.dataset.width || '100px';
    });
}

// panggil component
const components = [
    {id: "navbar", file: "components/navbar.html"},
    {id: "footer", file: "components/footer.html"},
    {id: "hero", file: "components/hero.html"},
    {id: "customer-need", file: "components/customer-need.html"},
    {id: "charcoal-process", file: "components/charcoal-process.html"},
    {id: "products", file: "components/products.html"},
    {id: "packaging", file: "components/packaging-process.html"},
    {id: "question", file: "components/question.html"},
];

components.forEach(c => loadComponent(c.id, c.file));