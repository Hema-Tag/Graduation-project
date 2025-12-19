
const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");
    if (document.body.style.overflow == "hidden") {
        document.body.style.overflow = "auto"
    } else {
        document.body.style.overflow = "hidden"
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        headerLinks.classList.remove("active");
        document.body.style.overflow = "auto"
    });
});


const teamData = {
    teamPhotos: [
        "./img/team group/teamgroup_1.webp",
        null,
        null
    ],

    members: [
        {
            name: "Ibrahim Tag",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل القطاع الافقي للطريق وعمل بورتفوليو للمشروع.",
            image: "img/team group/ibrahim-tag.webp",
            initials: "IH",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Abdo AbdelAtty",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل كوريدور للطريق.",
            image: "img/team group/abdo-abdelatty.webp",
            initials: "IH",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Abo Bakr",
            role: "Survey Project",
            description: " تصميم القطاع الرأسي للطريق وتصميم الميل الطولي للمسار وتجهيز لوحات المشروع وشرح تنفيذ اعمال الطرق في الموقع واختبارات الصلاحية للموارد وعمل رفع مساحي للطريق.",
            image: "img/team group/Abo-Bakr.webp",
            initials: "AM",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Abo Elhassan Mohamed",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل القطاع الافقي للطريق وعمل كتاب للمشروع.",
            image: "img/team group/Abo-Elhassan-mohamed.webp",
            initials: "SK",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Ahmed Abdelghaffar",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل القطاع الافقي للطريق وعمل كتاب للمشروع.",
            image: "img/team group/ahmed-abdou.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Ahmed Adel",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل كروس سيكشن للطريق.",
            image: "img/team group/ahmed-adel.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Ammar Kamal",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل كوريدور للطريق.",
            image: "img/team group/ammar-kamal.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Eslam Barakat",
            role: "Survey Project",
            description: "حساب كميات الحفر والردم للطريق وعمل تصميم مودلينج ونموذج محاكاة للواقع.",
            image: "img/team group/eslam-barakat.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Hemdan El Sheikh",
            role: "Survey Project",
            description: "حساب كميات الحفر والردم للطريق وعمل تصميم مودلينج ونموذج محاكاة للواقع.",
            image: "img/team group/hemdan-elsheikh.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Moustafa Kasem",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل كروس سيكشن للطريق.",
            image: "img/team group/mostafa-kasem.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Hamed Mohamed",
            role: "Survey Project",
            description: "عمل كروس سيكشن للطريق.",
            image: "img/team group/Hamed-Mohamed.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Moustafa Mahmoud",
            role: "Survey Project",
            description: "عمل قطاع افقي للطريق.",
            image: "img/team group/moustafa-mahmoud.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Omar Ahmed",
            role: "Survey Project",
            description: "عمل الرفع المساحي للطريق وادخال البيانات وعمل تعريف للسطح.",
            image: "img/team group/omar-ahmed.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Ahmed Mahmoud",
            role: "Survey Project",
            description: "عمل الرفع المساحي للطريق وادخال البيانات وعمل تعريف للسطح.",
            image: "img/team group/Ahmed-Mahmoud.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Tarek Kamal",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل كوريدور للطريق.",
            image: "img/team group/tarek-kamal.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Youssef Mohamed",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل نموذج موديلينج للطريق بواسطة برنامج الارك برو.",
            image: "img/team group/Youssef-Mohamed.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Basha Refa3y",
            role: "Survey Project",
            description: "حساب كميات الحفر والردم للطريق .",
            image: "img/team group/Basha-Refaey.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            name: "Ziad Hosney",
            role: "Survey Project",
            description: "عمل الرفع المساحي للطريق وادخال البيانات وعمل تعريف للسطح.",
            image: "img/team group/ziad-zaza.webp",
            initials: "MA",
            social: {
                facebook: "#",
                linkedin: "#",
                instagram: "#"
            }
        },
    ]
};

/* ================================
   Render Swiper Slides
================================ */
function renderSwiperSlides() {
    const swiperWrapper = document.querySelector(".teamSwiper .swiper-wrapper");
    swiperWrapper.innerHTML = "";

    if (!teamData.teamPhotos || teamData.teamPhotos.length === 0) {
        swiperWrapper.innerHTML = `
            <div class="swiper-slide">
                <div class="team-photo-placeholder">
                    <i class='bx bxs-group'></i>
                    <p>Team Photos Coming Soon</p>
                </div>
            </div>
        `;
        return;
    }

    teamData.teamPhotos.forEach(photo => {
        if (!photo) return;

        swiperWrapper.innerHTML += `
            <div class="swiper-slide">
                <img src="${photo}" alt="Team Photo" loading="lazy">
            </div>
        `;
    });
}

/* ================================
   Init Swiper
================================ */
function initSwiper() {
    new Swiper(".teamSwiper", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 800,
    });
}
/* ================================
   Team Members Swiper
================================ */

/* Social Icons */
function getSocialIcon(platform) {
    const icons = {
        facebook: "bxl-facebook",
        linkedin: "bxl-linkedin",
        instagram: "bxl-instagram",
    };
    return icons[platform] || "bx-link";
}

/* Render Members Cards inside Swiper */function renderMembersSwiper() {
    const wrapper = document.getElementById("membersWrapper");
    wrapper.innerHTML = "";

    teamData.members.forEach(member => {
        let socialHTML = "";
        for (let [platform, link] of Object.entries(member.social)) {
            socialHTML += `<a href="${link}" target="_blank"><i class='bx ${getSocialIcon(platform)}'></i></a>`;
        }

        wrapper.innerHTML += `
            <div class="swiper-slide">
                <div class="team-member">
                    <div class="member-image has-image">
                        <img src="${member.image}" loading="lazy">
                    </div>
                    <h3 class="member-name">${member.name}</h3>
                    <p class="member-role">${member.role}</p>
                    <p class="member-description">${member.description}</p>
                    <div class="member-social">
                        ${socialHTML}
                    </div>
                </div>
            </div>
        `;
    });
}
function initMembersSwiper() {
    if (document.querySelector('.membersSwiper').swiper) {
        document.querySelector('.membersSwiper').swiper.destroy(true, true);
    }

    new Swiper(".membersSwiper", {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
            rows: 2,
            fill: 'row'
        },
        loop: false,
        autoplay: {
            disableOnInteraction: false,
            delay: 5000
        },
        navigation: {
            nextEl: ".members-next",
            prevEl: ".members-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        grid: {
            rows: 2,
            fill: 'row'
        },
        slidesPerGroupSkip: 3,
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: { rows: 2 },
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: { rows: 2 },
                spaceBetween: 25
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                slidesPerGroupSkip: 3,
                grid: { rows: 2 },
                spaceBetween: 30
            }
        }
    });
}

/* ================================
   Init on Load
================================ */

let sections = document.querySelectorAll("section");
const nav = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    if (this.scrollY > 150) {
        nav.classList.add("slidedown");
    } else {
        nav.classList.remove("slidedown");
    }

    const scrollMiddle = window.scrollY + window.innerHeight / 2;

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollMiddle >= sectionTop && scrollMiddle < sectionBottom) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
})

/* ================================
   Book Preview Swiper (About Section)
================================ */
function initBookSwiper() {
    new Swiper(".bookSwiper", {
        direction: 'vertical',
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
    });
}

/* ================================
   scrollBtn
================================ */
const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.addEventListener("DOMContentLoaded", function () {
    if (window.scrollY > 150) {
        nav.classList.add("slidedown");
    } else {
        nav.classList.remove("slidedown");
    }

    // Team photos swiper
    renderSwiperSlides();
    initSwiper();

    // Team members swiper
    renderMembersSwiper();
    initMembersSwiper();
    initBookSwiper();
});
