let thumb = document.getElementById('thumb');
    thumb.onmousedown = function(event) {
      event.preventDefault();
      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newPos = event.clientX - shiftX - slider.getBoundingClientRect().left;
        if (newPos < 0) {
          newPos = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newPos > rightEdge) {
          newPos = rightEdge;
        }
        thumb.style.left = newPos + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    };
