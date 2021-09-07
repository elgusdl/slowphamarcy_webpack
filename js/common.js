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

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ (() => {

eval("\r\n\r\n$(function(){\r\n    $('header').load('inc.html header > div',nav);\r\n    $('footer').load('inc.html footer > div');\r\n\r\n    function nav(){\r\n        $('.meleft ul li').eq(1).find('div a').on('click',function(e){\r\n            e.preventDefault();\r\n            localStorage.like=$(this).attr('href');\r\n            setTimeout(function(){\r\n                location.href = \"store.html\";\r\n                // location.reload();\r\n            },10);   \r\n        })\r\n\r\n\r\n        $('.meleft ul li').on({\r\n            mouseenter:function(){$('header').addClass('active')},\r\n            mouseleave:function(){$('header').removeClass('active')}\r\n        });\r\n\r\n        $('header .meright a').eq(1).find('img').on('click',function(){\r\n            // console.log($('.log_bg'));\r\n            $('header .log_bg').toggleClass('active');\r\n        });\r\n\r\n\r\n\r\n        // $('header .mobile').find('img').on('click',function(){\r\n        //     $('header .meleft').toggleClass('active');\r\n        // });\r\n\r\n        let media = window.matchMedia(\"(max-width: 1374px)\");\r\n        let device;\r\n        media.addListener(function(e){            \r\n            resize(e);\r\n        })\r\n\r\n        function resize(e){           \r\n            if (e.matches) {\r\n                // device = 'mobile';   \r\n                $('header .meleft').hide();             \r\n            }else{\r\n                // device = 'pc';  \r\n                $('header .meleft').show();            \r\n            }\r\n        }\r\n        resize(media);\r\n        \r\n\r\n        $('header .mobile').find('img').on('click',function(){            \r\n            if( !$('header .meleft').hasClass('active') ){\r\n                $('header .meleft').slideDown();\r\n                $('header .meleft').addClass('active');\r\n                $(this).css(\"transform\",\"rotateZ(180deg)\");\r\n            }else{\r\n                $('header .meleft').slideUp();\r\n                $('header .meleft').removeClass('active');\r\n                $(this).css(\"transform\",\"rotateZ(0deg)\");\r\n            }                    \r\n        });\r\n                \r\n        \r\n           \r\n        \r\n        \r\n    }\r\n\r\n});\r\n\r\n\r\n\r\n// top버튼 생성\r\nconst elTop =  document.querySelector('.top');\r\n\r\nwindow.addEventListener('scroll', function(){\r\n    let domHei = document.documentElement.offsetHeight;\r\n    let winHei = window.innerHeight;\r\n\r\n    if(domHei - winHei <= window.scrollY){\r\n        console.log('끝이야!');\r\n    };\r\n\r\n    if(window.innerHeight < window.scrollY){\r\n        elTop.classList.add('active');\r\n    }else{\r\n        elTop.classList.remove('active');\r\n    }\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://slowphamarcy/./src/js/common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/common.js"]();
/******/ 	
/******/ })()
;