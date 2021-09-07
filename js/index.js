/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("\r\n    //about 나타나기\r\n    window.addEventListener('scroll', function(){\r\n        const elAbout = document.querySelector('.ab');\r\n        \r\n        let elHei;\r\n        let winHei = window.innerHeight;\r\n\r\n        elHei = elAbout.offsetTop;\r\n\r\n        if(elHei-winHei <= window.scrollY){\r\n        elAbout.classList.add('active');\r\n        }\r\n    });\r\n\r\n\r\n\r\n    //news 나타나기\r\n    const elNews = document.querySelector('.news');\r\n    window.addEventListener('scroll', function(){\r\n        let elHei = elNews.offsetTop;\r\n        let winHei = window.innerHeight;\r\n        if(elHei-winHei <= window.scrollY){\r\n            elNews.classList.add('active');\r\n        }\r\n    });\r\n\r\n\r\n\r\n\r\n    //store 나타나기\r\n    window.addEventListener('scroll', function(){\r\n        const elStore = document.querySelector('.st');\r\n        \r\n        let elHei;\r\n        let winHei = window.innerHeight;\r\n\r\n        elHei = elStore.offsetTop;\r\n\r\n        if(elHei-winHei <= window.scrollY){\r\n        elStore.classList.add('active');\r\n        }\r\n    });\r\n\r\n\r\n\r\n\r\n    //ha 나타나기\r\n    const elHa = document.querySelector('.ha');\r\n    const elHa1 = document.querySelector('.ha > div');\r\n    window.addEventListener('scroll', function(){\r\n        let elHei = elHa.offsetTop;\r\n        let winHei = window.innerHeight;\r\n        if(elHei-winHei <= window.scrollY){\r\n            elHa1.classList.add('active');\r\n        }\r\n    });\r\n\r\n\r\n\r\n\r\n    //work 나타나기\r\n    window.addEventListener('scroll', function(){\r\n        const elWork = document.querySelector('.work');\r\n        \r\n        let elHei;\r\n        let winHei = window.innerHeight;\r\n\r\n        elHei = elWork.offsetTop;\r\n\r\n        if(elHei-winHei <= window.scrollY){\r\n        elWork.classList.add('active');\r\n        }\r\n    });\r\n    \r\n\r\n    $(function(){\r\n\r\n        //모바일 메인 포토\r\n        $(\".photo\").slick({           \r\n            responsive: [\r\n                {\r\n                  breakpoint: 767,\r\n                  settings: {\r\n                    arrows: false,\r\n                    dots: true,\r\n                    infinite: true,\r\n                    slidesToShow: 1,\r\n                    slidesToScroll: 1,\r\n                    autoplay:true,\r\n                    autoplaySpeed:900,\r\n                  }\r\n                }\r\n            ]\r\n        });\r\n\r\n\r\n        // store slick\r\n        $(\".fvt\").slick({\r\n            arrow: true,\r\n            infinite: true,\r\n            centerMode: true,\r\n            slidesToShow: 3,\r\n            slidesToScroll: 1,\r\n\r\n            responsive: [ \r\n                {  \r\n                    breakpoint: 767,\r\n                    settings: {\r\n                        arrows: true,\r\n                        // dots: true,\r\n                        infinite: true,\r\n                        slidesToShow: 1,\r\n                        slidesToScroll: 1,\r\n                        autoplay:true,\r\n                        autoplaySpeed:3000\r\n                    }\r\n                }\r\n            ]\r\n        });\r\n\r\n\r\n        // work slick\r\n        $(\".wo .slider\").slick({\r\n            arrows: false,\r\n            dots: true,\r\n            infinite: true,\r\n            slidesToShow: 4,\r\n            slidesToScroll: 4,\r\n            autoplay:true,\r\n            autoplaySpeed:3000,\r\n            \r\n            responsive: [ \r\n                {  \r\n                    breakpoint: 767,\r\n                    settings: {\r\n                        arrows: false,\r\n                        dots: false,\r\n                        infinite: true,\r\n                        slidesToShow: 1,\r\n                        slidesToScroll: 1,\r\n                        autoplay:true,\r\n                        autoplaySpeed:3000\r\n                    }\r\n                }\r\n            ]\r\n\r\n        });\r\n\r\n    })\r\n\r\n \r\n  \r\n\r\n\r\n    \r\n    \r\n    \r\n    \r\n\r\n\n\n//# sourceURL=webpack://slowphamarcy/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;