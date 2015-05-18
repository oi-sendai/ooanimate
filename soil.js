// (function(window, document, undefined){
// window.onload = init;
// function init(){






// var canvas = oCanvas.create({ canvas: "#canvas", background: "#222" });

// // Center planet
// var center = canvas.display.ellipse({
//     x: canvas.width / 2, y: canvas.height / 2,
//     radius: canvas.width / 20,
//     fill: "#fff"
// }).add();

// // Prototype objects that will be used to instantiate the others
// var satelliteProto = canvas.display.ellipse({ fill: "#eee" });
// var pathProto = canvas.display.ellipse({ stroke: "1px #999" });

// // Set up data
// var satellites = [], depth = 3;
// var satelliteColors = ["#107B99", "#5F92C0", "#c7509f"];
// var pathColors = ["#666", "#107B99", "#5F92C0"];

// // Create seven satellites and paths. Definition is further down.
// for (var i = 0, l = 7; i < l; i++) {
//     createSatellite({
//         parent: center, depth: 1,
//         distance: (i + 1) * canvas.width / 6,
//         radius: canvas.width / 100,
//         speed: 1
//     });
// }

// // Set up a tick function that will move all satellites each frame
// canvas.setLoop(function () {
//     for (var i = 0, l = satellites.length; i < l; i++) {
//         satellites[i].rotation += satellites[i].speed;
//     }
// });

// // Definition for a satellite and its corresponding path
// function createSatellite (options) {

//     // Create the path that the satellite will follow
//     var path = pathProto.clone({
//         radius: options.distance,
//         x: options.x || 0, y: options.y || 0,
//         strokeColor: pathColors[options.depth - 1]
//     });
//     options.parent.addChild(path);

//     // Create a new satellite
//     var satellite = satelliteProto.clone({
//         origin: {
//             x: 0,
//             y: options.distance * (Math.round(Math.random()) ? 1 : -1)
//         },
//         speed: Math.random() * (2 * Math.random() - 0.5) + 0.5,
//         radius: options.radius,
//         x: options.x || 0, y: options.y || 0,
//         fill: satelliteColors[options.depth - 1],
//         rotation: Math.random() * 360
//     });
//     options.parent.addChild(satellite);
//     satellites.push(satellite);

//     // Create another satellite that will circle around this satellite
//     if (options.depth < depth) {
//         createSatellite({
//             parent: satellite, depth: options.depth + 1,
//             distance: options.radius * 7,
//             radius: options.radius / 1.5,
//             x: satellite.origin.x * -1, y: satellite.origin.y * -1,
//             speed: 10
//         });
//     }
// }










// }
// })(window, document, undefined)


// var gear = document.getElementById("gear");

// // // set up some defaults for the page
// // var canvasWidth  = 320
// // var canvasHeight = 320
// // var radius = 300

// // // create some image assets
// // var bowl = new Image();
// // bowl.src = "img/bowl.png";


// // // returns an object with the x and y coordinates to center a circle that is contained exactly by a square
// // function findCenter(canvasWidth, canvasHeight, radius){

// //   this.x = (canvasWidth - radius) / 2
// //   this.y = (canvasHeight - radius) / 2
// //   return {
// //       x : this.x,
// //       y : this.y
// //   }
// // }
// // var center = findCenter(canvasWidth, canvasHeight, radius);


// // // function begin() {
  
// // // }

// // // begin()



// var stage = new createjs.Stage("gear");



// var circle = new createjs.Shape();
// circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);

//   //Create a stage by getting a reference to the canvas
//     // stage = new createjs.Stage("demoCanvas");
//     //Create a Shape DisplayObject.
//     circle = new createjs.Shape();
//     circle.graphics.beginFill("red").drawCircle(0, 0, 40);
//     //Set position of Shape instance.
//     circle.x = circle.y = 50;
//     //Add Shape instance to stage display list.
//     stage.addChild(circle);
//     //Update stage will render next frame
//     stage.update();

//         //Update stage will render next frame
//     createjs.Ticker.addEventListener("tick", handleTick);

//     function handleTick() {
//      //Circle will move 10 units to the right.
//         circle.x += 10;
//         circle.x=r*cos(theta)
//      circle.y=r*sin(theta)
//         //Will cause the circle to wrap back
//         if (circle.x > stage.canvas.width) { circle.x = 0; }
//         stage.update();
//     }
// }
