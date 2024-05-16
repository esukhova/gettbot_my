window.addEventListener("DOMContentLoaded", () => {

    //Для меню
    const menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(onLinkClick);

    function onLinkClick(item) {
        item.addEventListener('click', function () {
            let currentLink = item;

            if (!currentLink.classList.contains('active')) {
                menuLinks.forEach(function (item) {
                    item.classList.remove('active');
                })
                currentLink.classList.add('active');
            }
        });
    }




    //Для hamburger-menu
    const body = document.documentElement;
    const navBtn = document.querySelector('.hamburger');
    const menuClass = 'show-nav';

    navBtn && navBtn.addEventListener('click', () => {
        body.classList.toggle(menuClass);
    });


   //Для обрезки текста статей в разделе "О нас пишут"
    $(function () {
        (function cropArticle() {
            $(".slider-waa-item__text").each(function () {
                let $article = $(this).find("p");

                while ($article.height() > $(this).height()) {
                    $article.text($article.text().split(" ").slice(0, $article.text().split(" ").length - 1).join(" ") + "...");
                }
            });
        })();
    });


    //Подключение аккордеона
    $(function () {
        $(".answers__accordion").accordion({
            collapsible: true
        });
    });


    //Подключение owl-каруселей
    $('.owl-carousel-hiw, .owl-carousel-waa').owlCarousel({
        loop: false,
        autoWidth: true,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                margin: 16
            },
            768: {
                margin: 20
            }
        }
    });

    $('.owl-carousel-exchanges').owlCarousel({
        loop: false,
        autoWidth: true,
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                margin: 35
            },
            400: {
                margin: 50
            },
            1180: {
                margin: 80
            }
        }
    });


    new WOW({
        animateClass: 'animate__animated',
    }).init();


    //Табы для раздела "Тарифы"
    const ratesTabs = document.querySelectorAll('.rates__period');
    const ratesTabsItems = document.querySelectorAll('.one-month, .six-month, .year');

    ratesTabs.forEach(onTabClick);

    function onTabClick(item) {
        item.addEventListener('click', function () {
            let currentRate = item;
            let tabClass = currentRate.getAttribute('data-tab');
            let currentTab = document.querySelectorAll(tabClass);

            if (!currentRate.classList.contains('active')) {
                ratesTabs.forEach(function (item) {
                    item.classList.remove('active');
                })
                ratesTabsItems.forEach(function (item) {
                    item.classList.remove('active');
                })

                currentRate.classList.add('active');
                currentTab.forEach(function (item) {
                    item.classList.add('active');
                });
            }

            if (currentRate.classList.contains('rates__period_bonus')) {
                document.querySelectorAll(tabClass + '~.accent-cloud').forEach(function (item) {
                    item.style = "visibility = visible; opacity: 1";
                });
            } else {
                document.querySelectorAll(tabClass + '~.accent-cloud').forEach(function (item) {
                    item.style = "visibility = hidden; opacity: 0";
                });
            }
        })
    }
})
