/**
* Template Name: Restaurantly
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

/* --------------------------------------------------------------
# Internationalization (i18n)
-------------------------------------------------------------- */
const translations = {
  en: {
    "nav_home": "Home",
    "nav_about": "About",
    "nav_menu": "Menu",
    "nav_bar": "Bar",
    "nav_cigar": "Cigar Club",
    "nav_events": "Events",
    "nav_gallery": "Gallery",
    "nav_contact": "Contact",
    "nav_feedback": "FeedBack",
    "book_table": "Book a Table",
    "welcome": "Welcome to",
    "our_menu": "Our Menu",
    "why_us": "WHY US",
    "why_choose": "Why Choose Churchill’s Whisky Bar",
    "check_menu": "Check Our Tasty Menu",
    "reservation": "RESERVATION",
    "contact_us": "Contact Us",
    "location": "Location",
    "open_hours": "Open Hours",
    "call_us": "Call Us",
    "email_us": "Email Us",
    "rights_reserved": "All Rights Reserved",
    "cigar_menu": "Cigar Menu",
    "memberships": "Our Memberships",
    "join_club": "Join Our Club",
    "gentlemen_club": "GENTELMEN'S PRIVATE CLUB",
    "hero_btn_menu": "Our Menu",
    "hero_btn_cigar": "Cigar Club",
    "hero_btn_bar": "Bar"
  },
  ro: {
    "nav_home": "Acasă",
    "nav_about": "Despre",
    "nav_menu": "Meniu",
    "nav_bar": "Bar",
    "nav_cigar": "Club Trabucuri",
    "nav_events": "Evenimente",
    "nav_gallery": "Galerie",
    "nav_contact": "Contact",
    "nav_feedback": "Recenzii",
    "book_table": "Rezervă o Masă",
    "welcome": "Bine ați venit la",
    "our_menu": "Meniul Nostru",
    "why_us": "DE CE NOI",
    "why_choose": "De ce să alegi Churchill’s Whisky Bar",
    "check_menu": "Vezi Meniul Nostru Gustos",
    "reservation": "REZERVARE",
    "contact_us": "Contactează-ne",
    "location": "Locație",
    "open_hours": "Program",
    "call_us": "Sună-ne",
    "email_us": "Email",
    "rights_reserved": "Toate Drepturile Rezervate",
    "cigar_menu": "Meniu Trabucuri",
    "memberships": "Abonamente",
    "join_club": "Alătură-te Clubului",
    "gentlemen_club": "CLUB PRIVAT PENTRU DOMNI",
    "hero_btn_menu": "Meniul Nostru",
    "hero_btn_cigar": "Club Trabucuri",
    "hero_btn_bar": "Bar"
  },
  fr: {
    "nav_home": "Accueil",
    "nav_about": "À Propos",
    "nav_menu": "Menu",
    "nav_bar": "Bar",
    "nav_cigar": "Club Cigare",
    "nav_events": "Événements",
    "nav_gallery": "Galerie",
    "nav_contact": "Contact",
    "nav_feedback": "Avis",
    "book_table": "Réserver",
    "welcome": "Bienvenue chez",
    "our_menu": "Notre Menu",
    "why_us": "POURQUOI NOUS",
    "why_choose": "Pourquoi choisir Churchill’s Whisky Bar",
    "check_menu": "Découvrez Notre Menu Savoureux",
    "reservation": "RÉSERVATION",
    "contact_us": "Contactez-nous",
    "location": "Emplacement",
    "open_hours": "Heures d'ouverture",
    "call_us": "Appelez-nous",
    "email_us": "Email",
    "rights_reserved": "Tous Droits Réservés",
    "cigar_menu": "Menu Cigares",
    "memberships": "Nos Adhésions",
    "join_club": "Rejoignez Notre Club",
    "gentlemen_club": "CLUB PRIVÉ POUR GENTLEMEN",
    "hero_btn_menu": "Notre Menu",
    "hero_btn_cigar": "Club Cigare",
    "hero_btn_bar": "Bar"
  },
  de: {
    "nav_home": "Startseite",
    "nav_about": "Über Uns",
    "nav_menu": "Speisekarte",
    "nav_bar": "Bar",
    "nav_cigar": "Zigarrenclub",
    "nav_events": "Veranstaltungen",
    "nav_gallery": "Galerie",
    "nav_contact": "Kontakt",
    "nav_feedback": "Feedback",
    "book_table": "Tisch Reservieren",
    "welcome": "Willkommen bei",
    "our_menu": "Unser Menü",
    "why_us": "WARUM WIR",
    "why_choose": "Warum Churchill’s Whisky Bar wählen",
    "check_menu": "Prüfen Sie unser leckeres Menü",
    "reservation": "RESERVIERUNG",
    "contact_us": "Kontaktieren Sie uns",
    "location": "Standort",
    "open_hours": "Öffnungszeiten",
    "call_us": "Rufen Sie uns an",
    "email_us": "Email",
    "rights_reserved": "Alle Rechte vorbehalten",
    "cigar_menu": "Zigarrenkarte",
    "memberships": "Unsere Mitgliedschaften",
    "join_club": "Treten Sie unserem Club bei",
    "gentlemen_club": "PRIVATCLUB FÜR GENTLEMEN",
    "hero_btn_menu": "Unser Menü",
    "hero_btn_cigar": "Zigarrenclub",
    "hero_btn_bar": "Bar"
  },
  it: {
    "nav_home": "Home",
    "nav_about": "Chi Siamo",
    "nav_menu": "Menu",
    "nav_bar": "Bar",
    "nav_cigar": "Club Sigari",
    "nav_events": "Eventi",
    "nav_gallery": "Galleria",
    "nav_contact": "Contatti",
    "nav_feedback": "Feedback",
    "book_table": "Prenota un Tavolo",
    "welcome": "Benvenuti da",
    "our_menu": "Il Nostro Menu",
    "why_us": "PERCHÉ NOI",
    "why_choose": "Perché scegliere Churchill’s Whisky Bar",
    "check_menu": "Scopri il Nostro Gustoso Menu",
    "reservation": "PRENOTAZIONE",
    "contact_us": "Contattaci",
    "location": "Posizione",
    "open_hours": "Orari di Apertura",
    "call_us": "Chiamaci",
    "email_us": "Email",
    "rights_reserved": "Tutti i Diritti Riservati",
    "cigar_menu": "Menu Sigari",
    "memberships": "Le Nostre Iscrizioni",
    "join_club": "Unisciti al Nostro Club",
    "gentlemen_club": "CLUB PRIVATO PER GENTLEMEN",
    "hero_btn_menu": "Il Nostro Menu",
    "hero_btn_cigar": "Club Sigari",
    "hero_btn_bar": "Bar"
  }
};

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'nav_home') {
         el.innerHTML = translations[lang][key] + '<br>';
      } else {
         el.textContent = translations[lang][key];
      }
    }
  });
  
  // Update placeholders
  const inputs = document.querySelectorAll('[data-i18n-placeholder]');
  inputs.forEach(input => {
    const key = input.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      input.placeholder = translations[lang][key];
    }
  });

  localStorage.setItem('churchills_lang', lang);
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('churchills_lang') || 'en';
  const langSelect = document.getElementById('language-select');
  
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', (e) => {
      updateLanguage(e.target.value);
    });
  }
  
  updateLanguage(savedLang);
});

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();