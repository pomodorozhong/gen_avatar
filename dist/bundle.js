(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = 480;
canvas.height = 480;
var ctx = canvas.getContext("2d");
draw();
function draw() {
    var width = 50;
    var height = width;
    var x = 50;
    var y = 50;
    for (var index = 0; index < 34; index++) {
        ctx.strokeRect(x, y, width, height);
        x += 10;
        y += 10;
    }
    x = 50;
    y = 480 - 100;
    for (var index = 0; index < 34; index++) {
        ctx.strokeRect(x, y, width, height);
        x += 10;
        y -= 10;
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNuQixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUNwQixJQUFJLEdBQUcsR0FBNkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU1RCxJQUFJLEVBQUUsQ0FBQztBQUVQLFNBQVMsSUFBSTtJQUNULElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztJQUVuQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFWCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNSLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDWDtJQUVELENBQUMsR0FBRyxFQUFFLENBQUM7SUFDUCxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUVkLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDckMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNYO0FBQ0wsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcbmNhbnZhcy53aWR0aCA9IDQ4MDtcbmNhbnZhcy5oZWlnaHQgPSA0ODA7XG5sZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5kcmF3KCk7XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgbGV0IHdpZHRoID0gNTA7XG4gICAgbGV0IGhlaWdodCA9IHdpZHRoO1xuICAgIFxuICAgIGxldCB4ID0gNTA7XG4gICAgbGV0IHkgPSA1MDtcbiAgICAvLyB1cHBlciBsZWZ0IHRvIGxvd2VyIHJpZ2h0XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDM0OyBpbmRleCsrKSB7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB4ICs9IDEwO1xuICAgICAgICB5ICs9IDEwO1xuICAgIH1cblxuICAgIHggPSA1MDtcbiAgICB5ID0gNDgwIC0gMTAwO1xuICAgIC8vIHVwcGVyIGxlZnQgdG8gbG93ZXIgcmlnaHRcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMzQ7IGluZGV4KyspIHtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIHggKz0gMTA7XG4gICAgICAgIHkgLT0gMTA7XG4gICAgfVxufVxuIl19
