function loadComponent(id, file, callback) {
    const el = document.getElementById(id);
    if (!el) {          // ← skip kalau ID tidak ada di halaman ini
        if (callback) callback();
        return;
    }
    fetch(file)
        .then(r => r.text())
        .then(data => {
            el.innerHTML = data;
            if (callback) callback();
        })
        .catch(err => console.error(err));
}

function initHamburger() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        menuBtn.querySelector("i").className = isOpen ? "fa fa-x" : "fa fa-bars";
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuBtn.querySelector("i").className = "fa fa-bars";
        });
    });
}

function renderCards(data, containerId, renderer) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.log(containerId + " belum ada");
        return;
    }

    // container.innerHTML = data.map(item => createCardPackaging(item)).join("");
    // container.innerHTML = data.map(item => renderer(item)).join("");
    container.innerHTML = data.map((item, index) => renderer(item, index)).join("");
}

// panggil component
const components = [
    { id: "navbar", file: "components/navbar.html" },
    { id: "footer", file: "components/footer.html" },
    { id: "hero", file: "components/hero.html" },
    { id: "customer-need", file: "components/customer-need.html" },
    { id: "question", file: "components/question.html" },
    { id: "commitment", file: "components/commitment-card.html" },
    
    {
        id: "navbar", file: "components/navbar.html", onLoad: () => {
            setActiveNav(),
            initHamburger()
        }
    },

    // reuseable
    {
        id: "charcoal-process",
        file: "components/charcoal-process-container.html",
        onLoad: () => renderCards(charcoalProcess, "charcoalProcess-card-container", createCardProcess)
    },

    {
        id: "products",
        file: "components/products-component.html",
        onLoad: () => {
            renderCards(product1, "product1-card-container", createCardProduct1);
            renderCards(product2, "product2-card-container", createCardProduct2);
        }
    },

    {
        id: "packaging",
        file: "components/packaging-process.html",
        onLoad: () => renderCards(packageProcess, "packageProcess-card-container", createCardPackaging)
    },
];

// components.forEach(c => loadComponent(c.id, c.file));
// components.forEach(c => {loadComponent(c.id, c.file, c.onLoad);});
// ganti forEach biasa dengan Promise.all
Promise.all(
    components.map(c => new Promise(resolve => {
        loadComponent(c.id, c.file, () => {
            if (c.onLoad) c.onLoad();
            resolve();
        });
    }))
).then(() => {
    initScrollAnimations(); // panggil dari main.js setelah semua component loaded
});