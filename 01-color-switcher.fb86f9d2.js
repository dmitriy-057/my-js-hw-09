!function(){var t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")},e={id:null,isActive:!1,start:function(){e.isActive||(e.isActive=!0,e.id=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))},stop:function(){e.isActive=!1,clearInterval(e.id)}};t.start.addEventListener("click",e.start),t.stop.addEventListener("click",e.stop)}();
//# sourceMappingURL=01-color-switcher.fb86f9d2.js.map