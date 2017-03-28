
    var userAgent = navigator.userAgent.toLowerCase(), initialDate = new Date(), 
$document = $(document), $window = $(window), $html = $("html"), isDesktop = $html.hasClass("desktop"), 
isIE = userAgent.indexOf("msie") != -1 ? parseInt(userAgent.split("msie")[1]) : userAgent.indexOf("trident") != -1 ? 11 : userAgent.indexOf("edge") != -1 ? 12 : false, 
isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), 
isTouch = "ontouchstart" in window, plugins = { pointerEvents: isIE < 11 ? "js/pointer-events.min.js" : false, 
bootstrapTooltip: $("[data-toggle='tooltip']"), bootstrapModalDialog: $('.modal'), bootstrapTabs: $(".tabs"), 
rdNavbar: $(".rd-navbar"), rdParallax: $(".rd-parallax"), rdGoogleMaps: $(".rd-google-map"), rdMailForm: $(".rd-mailform"), 
rdInputLabel: $(".form-label"), regula: $("[data-constraints]"), responsiveTabs: $(".responsive-tabs"), owl: $(".owl-carousel"),
swiper: $(".swiper-slider"), search: $(".rd-search"), searchResults: $('.rd-search-results'), statefulButton: $('.btn-stateful'),
isotope: $(".isotope"), popover: $('[data-toggle="popover"]'), viewAnimate: $('.view-animate'), 
photoSwipeGallery: $("[data-photo-swipe-item]"), radio: $("input[type='radio']"), checkbox: $("input[type='checkbox']"), 
customToggle: $("[data-custom-toggle]"), facebookWidget: $('#fb-root'), dateCountdown: $('.DateCountdown'), 
countDown: $(".countdown"), counter: $(".counter"), progressBarCustom: $(".progress-bar-js"), selectFilter: $("select"), 
twitterfeed: $(".twitter"), stepper: $("input[type='number']"), progressBar: $(".progress-linear"), slick: $('.slick-slider'), };

        (function ($) {
            if ($(window).width() <= 1024) {
                var responsiveTabsItem = $('#resp_table');
var i; for (i = 0; i < plugins.responsiveTabs.length; i++) {
            var responsiveTabsItem = $(plugins.responsiveTabs[i]); 
            responsiveTabsItem.easyResponsiveTabs({ type: responsiveTabsItem.attr("data-type") === "accordion" ? "accordion" : "default" });
             if (responsiveTabsItem.find('.owl-carousel').length) { responsiveTabsItem.find('.resp-tab-item').on('click', $.proxy(function (event) { var $this = $(this), carouselObj = ($this.find('.resp-tab-content-active .owl-carousel').owlCarousel()).data('owlCarousel'); if (carouselObj && typeof carouselObj.onResize === "function") { carouselObj.onResize(); } }, responsiveTabsItem)); responsiveTabsItem.find('.resp-accordion').on('click', $.proxy(function (event) { var $this = $(this), carouselObj = ($this.find('.resp-tab-content-active .owl-carousel').owlCarousel()).data('owlCarousel'); if (carouselObj && typeof carouselObj.onResize === "function") { carouselObj.onResize(); } }, responsiveTabsItem)); }
            if (responsiveTabsItem.find('.slick-slider').length) 
            { responsiveTabsItem.find('.resp-tab-item').on('click', $.proxy(function (event) 
            { var $this = $(this); $this.find('.resp-tab-content-active .slick-slider').slick('setPosition'); }, 
            responsiveTabsItem)); responsiveTabsItem.find('.resp-accordion').on('click', $.proxy(function (event)
             { var $this = $(this); $this.find('.resp-tab-content-active .slick-slider').slick('setPosition'); console.log(1); },
              responsiveTabsItem)); }
            if (responsiveTabsItem.attr('data-external-buttons') == "true") {
                var list = responsiveTabsItem.find('.resp-tabs-list li'), newList = '<ul class="resp-tabs-extertal-list">'; for (var j = 0; j < list.length; j++) { newList += '<li><span>' + $(list[j]).text() + '</span></li>'; }
                newList += '</ul>'; responsiveTabsItem.find('.resp-tabs-container').before('<div class="resp-tab-external-prev"></div>')
                responsiveTabsItem.find('.resp-tab-external-prev').html(newList); responsiveTabsItem.find('.resp-tabs-container').after('<div class="resp-tab-external-next"></div>'); responsiveTabsItem.find('.resp-tab-external-next').html(newList); changeExternalButtons(responsiveTabsItem); responsiveTabsItem.find('.resp-tab-external-prev').on('click', $.proxy(function (event) { var $this = $(this); changeExternalButtons($this, 'prev'); }, responsiveTabsItem)); responsiveTabsItem.find('.resp-tab-external-next').on('click', $.proxy(function (event) { var $this = $(this); changeExternalButtons($this, 'next'); }, responsiveTabsItem)); responsiveTabsItem.find('.resp-tabs-list .resp-tab-item').on('click', $.proxy(function (event) { var $this = $(this); changeExternalButtons($this); }, responsiveTabsItem));
            }
        }
        
    }
    });