import '../css/common.css'
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const refs = {
    start: document.querySelector("button[data-start]"),
    stop: document.querySelector("button[data-stop]"),
    body: document.querySelector('body'),
  }


  const interval = {
    id: null,
    isActive: false,

    start() {
        if (interval.isActive) {
            return;
        };

        interval.isActive = true;    
        interval.id = setInterval(() => {
            refs.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
      },
    
    stop() {
        interval.isActive = false;
        clearInterval(interval.id);
    },
  };

  refs.start.addEventListener('click', interval.start);
  refs.stop.addEventListener('click', interval.stop)