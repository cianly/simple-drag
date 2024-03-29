/*
* @Author: ly
* @Date:   2017-12-21 16:37:57
* @Last Modified by:   ly
* @Last Modified time: 2017-12-21 16:38:00
*/


    angular.module('drag', []).
      directive('draggable', function($document) {
        return function(scope, element, attr) {
          var startX = 0, startY = 0, x = 0, y = 0;
          element.css({
           position: 'relative',
           border: '1px solid red',
           backgroundColor: 'lightgrey',
           cursor: 'pointer'
          });
          element.on('mousedown', function(event) {
            // 阻止默认的选中内容的拖拽
            event.preventDefault();
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
          });
     
          function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
              top: y + 'px',
              left:  x + 'px'
            });
          }
     
          function mouseup() {
            $document.unbind('mousemove', mousemove);
            $document.unbind('mouseup', mouseup);
          }
        }
      });

