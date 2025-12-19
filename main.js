
const hamburger = document.querySelector(".hamburger");
const headerLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

// فتح وغلق القائمة عند الضغط على الهامبرجر
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerLinks.classList.toggle("active");
    document.body.style.overflow = "hidden"
});

// غلق القائمة تلقائياً عند الضغط على أي رابط
links.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        headerLinks.classList.remove("active");
        document.body.style.overflow = "auto"
    });
});


const teamData = {
    // صور الفريق الجماعية - ممكن تضيف كتير
    teamPhotos: [
        "./img/team group/teamgroup_1.jpg", // حط هنا مسار الصورة الأولى: "img/team-photo1.jpg"
        null, // حط هنا مسار الصورة الثانية: "img/team-photo2.jpg"
        null  // حط هنا مسار الصورة الثالثة: "img/team-photo3.jpg"
    ],

    members: [
        {
            name: "Ibrahim Tag",
            role: "Survey Project",
            description: "عمل رفع مساحي للطريق وعمل القطاع الافقي للطريق وعمل بورتفوليو للمشروع.",
            image: "img/team group/ibrahim-tag.jpg", // حط هنا مسار الصورة: "img/member1.jpg"
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
            image: "img/team group/abdo-abdelatty.jpg", // حط هنا مسار الصورة: "img/member1.jpg"
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
            image: "img/team group/Abo-Bakr.jpg",
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
            image: "img/team group/Abo-Elhassan-mohamed.jpg",
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
            image: "img/team group/ahmed-abdou.jpg",
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
            image: "img/team group/ahmed-adel.jpg",
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
            image: "img/team group/amma-kamal.jpg",
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
            image: "img/team group/eslam-barakat.jpg",
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
            image: "img/team group/hemdan-elsheikh.jpg",
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
            image: "img/team group/mostafa-kasem.jpg",
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
            image: "img/team group/Hamed-Mohamed.jpg",
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
            image: "img/team group/moustafa-mahmoud.jpg",
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
            image: "img/team group/omar-ahmed.jpg",
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
            image: "img/team group/Ahmed-Mahmoud.Jpg",
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
            image: "img/team group/tarek-kamal.jpg",
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
            image: "img/team group/Youssef-Mohamed.jpg",
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
            image: "img/team group/Basha-Refaey.jpg",
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
            image: "img/team group/ziad-zaza.jpg",
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
                <img src="${photo}" alt="Team Photo">
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
                        <img src="${member.image}">
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
    // لو في Swiper قديم، دمّره عشان يعاد تهيئته
    if (document.querySelector('.membersSwiper').swiper) {
        document.querySelector('.membersSwiper').swiper.destroy(true, true);
    }

    new Swiper(".membersSwiper", {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,          // ← هنا بنحط 3 (عدد الكروت في الصف)
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
        // مهم جدًا: الخاصية دي اللي بتخلي السلايدر ينتقل صفحة كاملة
        grid: {
            rows: 2,
            fill: 'row'
        },
        // إضافة هذه الخاصية عشان يتعامل مع الـ grid صح
        slidesPerGroupSkip: 3,      // ← هنا السر! تخلي الـ slidesPerGroup يشتغل مع الـ grid
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

    const scrollMiddle = window.scrollY + window.innerHeight / 2; // نص الشاشة

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
