// PACKAGING SECTION
function createCardPackaging({ img, number, title, subtitle, color }) {
    return `
    <div class="relative w-[200px] h-[280px] md:w-[300px] lg:w-[250px]">
        <img src="${img}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

        <div class="absolute top-0 left-4 -mt-2 z-20">
            <div class="relative ${color} w-14 lg:w-20 h-20 flex items-center justify-center text-white font-bold text-2xl lg:text-3xl">
                
                <div class="absolute -bottom-4 lg:-bottom-7 left-1/2 -translate-x-1/2 w-0 h-0
                    border-l-[28px] lg:border-l-[40px] border-l-transparent 
                    border-r-[28px] lg:border-r-[40px] border-r-transparent 
                    border-t-[16px] lg:border-t-[28px] ${color.replace('bg-', 'border-t-')}">
                </div>

                ${number}
            </div>
        </div>

        <div class="absolute top-4 right-4 w-24 md:top-6 md:right-40 md:w-12 lg:top-6 lg:right-14 lg:w-20">
            <h2 class="text-white text-left text-sm md:text-lg font-bold font-lato">${title}</h2>
            <p class="text-white text-left text-sm font-lato">${subtitle}</p>
        </div>
    </div>
    `;
}

// CHARCOAL PROCESS
function createCardProcess({ img, number, title, subtitle, color }, index) {
    const offsetClass = index === 1 ? 'ml-10 md:ml-0' : '';

    return `
    <div class="relative w-[220px] h-[200px] md:h-[280px] md:w-[220px] lg:w-[310px] lg:h-[320px] ${offsetClass}">
        <img src="${img}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

        <div>
            <div class="absolute top-0 left-4 -mt-2 z-20">
                
                <!-- badge number -->
                <div class="relative ${color} w-14 lg:w-20 h-20 flex items-center justify-center text-white font-bold text-2xl lg:text-3xl">
                
                    <div class="absolute -bottom-4 lg:-bottom-7 left-1/2 -translate-x-1/2 w-0 h-0
                        border-l-[28px] lg:border-l-[40px] border-l-transparent 
                        border-r-[28px] lg:border-r-[40px] border-r-transparent 
                        border-t-[16px] lg:border-t-[28px] ${color.replace('bg-', 'border-t-')}">
                    </div>

                    ${number}
                </div>

            </div>

            <!-- title and subtitle -->
            <div class="absolute flex flex-col top-6 right-10 w-24 md:right-4 md:w-[110px] lg:right-10 lg:w-40">
                <h2 class="text-white text-left text-sm lg:text-xl font-bold font-lato">${title}</h2>
                <p class="text-white text-left text-sm  font-lato">${subtitle}</p>
            </div>
        </div>

    </div>
    `;
}

// PRODUCTS SECTION
function createCardProduct1({ img }) {
    return `
        <div class="bg-cardSection mb-20">

            <!-- desktop screen -->
            <div class="hidden md:grid grid-cols-2">

                <div class="text-primaryTeks px-4 py-4">
                    <h2 class="font-lato text-3xl mb-20">HEXAGONAL FOR SISHA</h2>
                    <p class="font-playfair mb-20 w-full">Hexagonal briquettes are 
                    designed for longer sessions and higher efficiency, making them suitable for heavy usage.</p>

                    <a href="product-hexagonal.html">
                        <button class="button">
                            VIEW PRODUCT
                        </button>
                    </a>
                </div>
                <div class="flex md:justify-end">
                    <div class="bg-neutralColor h-full w-4"></div>
                    <img src=${img} alt="cube-sisha"
                        class="h-full w-[480px] object-center object-cover " />
                </div>
            </div>

            <!-- phone screen -->
            <div class="md:hidden grid grid-cols-1">
                <div>
                    <img src=${img} alt="cube-sisha"
                        class="h-[220px] w-full object-center object-cover " />
                    <div class="bg-neutralColor h-6 w-full"></div>
                </div>

                <div class="flex flex-col gap-8 text-primaryTeks px-4 py-4 text-left">
                    <h2 class="font-lato text-xl lg:text-3xl">HEXAGONAL FOR SISHA</h2>
                    <p class="font-playfair w-full text-justify">Hexagonal briquettes are 
                    designed for longer sessions and higher efficiency, making them suitable for heavy usage.</p>
                    <div class="text-right">
                        <a href="product-hexagonal.html">
                            <button class="button">
                                VIEW PRODUCT
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createCardProduct2({ img }) {
    return `
        <div class="bg-cardSection mb-20">
            <!-- desktop screen -->
            <div class="hidden md:grid grid-cols-2">

                <div class="flex md:justify-start">
                    <img src=${img} alt="cube-sisha"
                        class="h-full lg:h-[360px] w-[480px] object-center object-cover " />
                    <div class="bg-emphasisColor h-full w-4"></div>
                </div>

                <div class="text-right text-primaryTeks px-4 py-4">
                    <h2 class="font-lato text-3xl mb-20">CUBE FOR SISHA</h2>
                    <p class="font-playfair mb-20 w-full">Cube briquettes are the most popular choice for shisha users due to
                        their balance between heat and durability.</p>

                    <a href="product-cube.html">
                        <button class="button">
                            VIEW PRODUCT
                        </button>
                    </a>
                </div>
            </div>

            <!-- phone screen -->
            <div class="md:hidden grid grid-cols-1">
                <div>
                    <img src=${img} alt="cube-sisha"
                        class="h-[220px] w-full object-center object-cover " />
                    <div class="bg-emphasisColor h-6 w-full"></div>
                </div>

                <div class="flex flex-col gap-8 text-primaryTeks px-4 py-4 text-left">
                    <h2 class="font-lato text-xl lg:text-3xl">CUBE FOR SISHA</h2>
                    <p class="font-playfair w-full text-justify">Cube briquettes are the most popular choice for shisha users due
                        to their balance between heat and durability.</p>
                    <div class="text-right">
                        <a href="product-cube.html">
                            <button class="button">
                                VIEW PRODUCT
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// navbar
function setActiveNav() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // Desktop
    document.querySelectorAll(".nav-link a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Mobile
    document.querySelectorAll("#mobile-menu a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
}