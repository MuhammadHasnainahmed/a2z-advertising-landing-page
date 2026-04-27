// counter animation for stats section
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (el) => {
        const target = +el.getAttribute("data-target");
        let count = 0;

        const speed = target / 80; // smoothness control

        const update = () => {
            count += speed;

            if (count < target) {
                el.innerText = Math.ceil(count);
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target >= 10 ? "+" : "");
            }
        };

        update();
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // avoid re-running
                if (!el.classList.contains("done")) {
                    el.classList.add("done");
                    animateCounter(el);
                }
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(counter => observer.observe(counter));
});
// counter animation for stats section

// nav mobile menu toggle
const menuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// nav mobile menu toggle



const services = [
    {
        id: 1,
        name: "Signage Board",
        category: "Signage",
        image: "./images/electricsignage.jpg",
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-sign-hanging"
    },
    {
        id: 2,
        name: "Neon Sign",
        category: "Signage",
        image: "./images/electricsignage.jpg",
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-sign-hanging"
    },
    {
        id: 3,
        name: "SMD Display",
        category: "Signage",
        image: "./images/electricsignage.jpg",
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-tv"
    },
    {
        id: 4,
        name: "Wall Branding",
        category: "Branding",
        image: "./images/electricsignage.jpg",
        color: "bg-[#C59239]/15 text-[#C59239]",
        icon: "fa-brush"
    },
    {
        id: 5,
        name: "Awards & Medals",
        category: "Corporate Gifts Aways",
        image: "./images/electricsignage.jpg",
        color: "bg-[#D2232A]/10 text-[#D2232A]",
        icon: "fa-award"
    },
    {
        id: 6,
        name: "Custom Mugs",
        category: "Custom Products",
        image: "./images/electricsignage.jpg",
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-mug-hot"
    },
    {
        id: 7,
        name: "Water Bottles",
        category: "Custom Products",
        image: "./images/electricsignage.jpg",
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-bottle-water"
    },
    {
        id: 8,
        name: "Keychains",
        category: "Custom Products",
        image: "./images/electricsignage.jpg",
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-key"
    },
    {
        id: 9,
        name: "Badges",
        category: "Custom Products",
        image: "./images/electricsignage.jpg",
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-id-badge"
    },
    {
        id: 10,
        name: "Stationery Design",
        category: "Stationery",
        image: "./images/electricsignage.jpg",
        color: "bg-[#C59239]/15 text-[#C59239]",
        icon: "fa-book"
    },
    {
        id: 11,
        name: "Stationery Design",
        category: "Event & Catering",
        image: "./images/electricsignage.jpg",
        color: "bg-[#C59239]/15 text-[#C59239]",
        icon: "fa-book"
    }
    , {
        id: 12,
        name: "Stationery Design",
        category: "Ctu and shelf Talker",
        image: "./images/electricsignage.jpg",
        color: "bg-[#C59239]/15 text-[#C59239]",
        icon: "fa-book"
    }
];
const categoryNav = document.getElementById("categoryNav");
const serviceGrid = document.getElementById("serviceGrid");

let activeCategory = "All";

// auto categories
const categories = ["All", ...new Set(services.map(s => s.category))];

// ----------------------
// RENDER EVERYTHING
// ----------------------
function renderAll() {
    renderCategories();
    renderServices(activeCategory);
}

// ----------------------
// RENDER CATEGORIES
// ----------------------

const getTabStyle = (cat) => {

    if (cat === "Signage") return {
        color: "bg-[#005696]/10 text-[#005696]",
        icon: "fa-sign-hanging"
    };

    if (cat === "Branding") return {
        color: "bg-[#C59239]/15 text-[#C59239]",
        icon: "fa-brush"
    };

    if (cat === "Corporate Gifts Aways") return {
        color: "bg-[#D2232A]/10 text-[#D2232A]",
        icon: "fa-award"
    };

    if (cat === "Custom Products") return {
        color: "bg-blue-100 text-blue-700",
        icon: "fa-gift"
    };

    if (cat === "Stationery") return {
        color: "bg-yellow-100 text-yellow-700",
        icon: "fa-book"
    };
    if (cat === "Event & Catering") return {
        color: "bg-blue-100 text-blue-700",
        icon: "fa-box-open"
    };
    if (cat === "Ctu and shelf Talker") return {
        color: "bg-red-100 text-red-700",
        icon: "fa-display"
    };

    return {
        color: "bg-gray-100 text-gray-700",
        icon: "fa-layer-group"
    };
};

function renderCategories() {
    categoryNav.innerHTML = "";

    categories.forEach(cat => {

        const style = getTabStyle(cat); // ✅ FIX: use cat not activeCategory

        const btn = document.createElement("div");

        btn.innerHTML = `
            <i class="fa-solid ${style.icon}"></i>
            <span>${cat}</span>
        `;

        btn.className = `
    snap-start flex items-center gap-2 px-5 py-2 rounded-full whitespace-nowrap cursor-pointer flex-shrink-0 transition-all duration-300
    ${activeCategory === cat
                ? style.color
                : "text-gray-500 hover:bg-gray-100"}
`;

        btn.addEventListener("click", () => {
            activeCategory = cat;
            renderAll();
        });

        categoryNav.appendChild(btn);
    });
}
// ----------------------
// RENDER SERVICES
// ----------------------
function renderServices(filter) {
    serviceGrid.innerHTML = "";

    const filtered = filter === "All"
        ? services.slice(0, 5)
        : services.filter(s => s.category === filter);
    console.log(filtered);
    filtered.forEach((item, index) => {

        const card = document.createElement("div");

        // stagger up/down effect
        const stagger = index % 2 === 0
            ? "-translate-y-4 md:-translate-y-6"
            : "translate-y-4 md:translate-y-6";

        card.className = `
            group relative overflow-hidden rounded-3xl aspect-[3/4]
            shadow-lg hover:shadow-2xl transition duration-500
            ${stagger}
        `;

        card.innerHTML = `
            <img src="${item.image}"
                class="w-[300px] h-[300px] object-cover group-hover:scale-110 transition duration-700">

            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
                opacity-0 group-hover:opacity-100 transition"></div>

            <div class="absolute bottom-4 left-4 text-white text-sm font-semibold
                opacity-0 group-hover:opacity-100 transition">
                ${item.name}
            </div>
        `;

        serviceGrid.appendChild(card);
    });
}

// ----------------------
// INIT
// ----------------------
renderAll();


// hero swiper
 