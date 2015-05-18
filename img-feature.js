$(document).ready(function() {

	// function MyClass(arg) {

	// 	this.arg = arg;
		
	// }
	// MyClass.prototype.greet = function() {
	//     console.log('Hello!');
	// };
	// var inst = new MyClass('GI JAH');

	// inst.greet()

// 	var MyClass = (function() {
// 	    var multiplier = 10;
// 	    function MyClass(n) {
// 	        this.n = n * multiplier;
// 	    }
// 	    return MyClass;
// 	})();
	
// 	var inst = new MyClass(2);
// console.log(inst.n)

// http://arjanvandergaag.nl/blog/javascript-class-pattern.html
// function mixin(c, p) {
//     for(k in p) if(p.hasOwnProperty(k)) c[k] = p[k];
// }

// function bind(o, f) {
//     return function() { return f.apply(o, arguments); };
// }

// function inherits(c, p) {
//     mixin(c, p);
//     function f() { this.constructor = c; };
//     f.prototype = c._super = p.prototype;
//     c.prototype = new f();
// }


// var thing = new ProductionLine('test')

// var Ferrari = (function() {
//     inherits(Ferrari, Car);
//     function Ferrari() {
//         args = Array.prototype.slice.call(arguments);
//         Ferrari._super.constructor.apply(this, [2].concat(args));
//     }
//     function warn() {
//         console.log('Getting ready...');
//     }
//     Ferrari.description = 'awesome car';
//     Ferrari.prototype.drive = function() {
//         warn();
//         this.constructor._super.drive.call(this);
//     };
//     return Ferrari;
// })();

// var thisIsTestable = function(){
//     console.log(this.config);
//       var modt = this.config
//       var  belt = $('#belt')
//       console.log('belt',modt.config.client);
//       belt.html('modt.config.client')
// }









// this is what we are trying to acheive
  var doStuff = function(){

        /// Cool Stuff Here

        // var tl = new TimelineLite({onComplete:dostuff})
        var tl = new TimelineLite()
        var siteFirst = $('.moving-word.first .site')
        var techFirst = $('.moving-word.first .tech')
        var skillsFirst = $('.moving-word.first .skills')

        var topLeftFirst = $('.moving-part.img-top-left.first')
        var topRightFirst = $('.moving-part.img-top-right.first')
        var middleFirst = $('.moving-part.img-middle.first')
        var bottomLeftFirst = $('.moving-part.img-bottom-left.first')
        var bottomRightFirst = $('.moving-part.img-bottom-right.first')

    tl.to(siteFirst, 1, {x:450, ease:Power2.easeInOut})
    .to(techFirst,   1, {x:450, ease:Power2.easeInOut})
    .to(skillsFirst, 1, {x:450, ease:Power2.easeInOut})


    tl.to(topLeftFirst, 3.1, {y:300, scale:0.5, ease: Bounce.easeOut}, "+=0") 
    tl.to(topRightFirst, 2.9, {y:300, scale:0.5, ease: Bounce.easeOut}, '-=3') 
    tl.to(middleFirst, 3, {x:-400, scale:0.5, ease: Bounce.easeOut}, '-=3') 
    tl.to(bottomRightFirst, 3, {y:900, scale:0.5, ease: Bounce.easeOut}, '-=3') 
    tl.to(bottomLeftFirst, 3, {y:-900, scale:0.5, ease: Bounce.easeOut}, '-=3') 
    tl.to([siteFirst,techFirst,skillsFirst], 1.5, {scale:0.5, opacity:0}, '-=3')
    .to([topLeftFirst,topRightFirst,middleFirst,bottomLeftFirst,bottomRightFirst], 0,{zIndex:50}) 


  }
  doStuff()


var Car = (function() {
    // function Car(seats, wheels, config) {
    function Car(config) {
      this.config = config
        // this.seats  = $('.moving-text.'+seats);
        // this.wheels = $('.moving-part.'+wheels);
    }
    Car.prototype.describe = function() {
      console.log(this.config.client)
        // in the constructor function this refers to the new instance.
        console.log('Our Client ' + this.config.client + ' is pretty cool.');
        console.log('They use ' + this.config.technology + ' on their website.');
        console.log('Their currenent image is ' + this.config.sprite + ' is pretty cool.');
    };
    Car.prototype.drive = function() {
        console.log('Vroom, vroom goes the car with ' + this.seats + ' seats and ' + this.wheels + ' wheels.');
    };
    Car.prototype.config = {
      'client' : '', 
      'technology': '',
      'sprite': '',
      'speed': '' 
    }
    // Car.prototype.journey = function(){console.log('bal')}//new ProductionLine('test');
    Car.prototype.journey = function(){
     var thing = new ProductionLine(this.config);//'dsfdsfd'; 
     return thing//
    }
    return Car;
})();

var client_shiny = {
      'client' : 'Shiny',
      'technology': 'Stacks',
      'sprite': 'shiny-sprite.png',
      'speed': 4 
    }
var client_bright = {
      'client' : 'Bright',
      'technology': 'Stacks',
      'sprite': 'bright-sprite.png',
      'speed': 4 
    }



var ProductionLine = (function() {
    function ProductionLine(config) {
      console.log('when does this happen')
      this.config = config
      this.tl = new TimelineLite()
    } 

    ProductionLine.prototype.moveWords = function(){
      // closure
      var client = this.config.config.client
      var item = $('.moving-'+ client)

      console.log('stuff happening', item)
      // item.hide()

      this.tl
      .to(item, 3.1, {x:300, ease: Bounce.easeIn}) 
      .to(item, 3.1, {x:600, ease: Bounce.easeIn}) 
    }

    ProductionLine.prototype.build = function(){
       var siteFirst = $('.moving-word.first .site')
       var techFirst = $('.moving-word.first .tech')
 //       var skillsFirst = $('.moving-word.first .skills')

    }
    ProductionLine.prototype.recyle = function(){

    }
    return ProductionLine;
      // create a holder for cars

      // var tl = new TimelineLite({onComplete:this.recyle})


      // this.config = config
        // this.seats  = $('.moving-text.'+seats);
        // this.wheels = $('.moving-part.'+wheels);
    // ProductionLine.prototype.recycle =
})();




/*
* takes an array of client config options
* builds them into cars
* passes them to production line
*/
function cycleClients(clientArray){
  var clientArray = clientArray;
  var animateQueue = [];
  var classArray = []

  var weNeedAcounter = 0
  var initCounter = clientArray.length
  

  // build animation sequence
  for (clientKey in clientArray){
    console.log(clientKey);
    var config = clientArray[clientKey];
    var client = new Car(config)
    animateQueue.push(client);
  }

  console.log(animateQueue)

  for(current in animateQueue){
    classArray.push('moving-'+current)
  }
  console.log(classArray);

  // Add word to dom
  for(current in animateQueue){
    var  belt = $('#belt .part');
    var words = animateQueue[current]
    // console.log(words.config.client)
    var element = '<div class="moving-word moving-'+words.config.client+'">'+ words.config.client +'</div>';
    belt.append(element);
  }
  // Add add a picture

    // window.setTimeout(function(){
  
      // this is where it stops working
  for(current in animateQueue){
        var client = animateQueue[current]
        var productionLine = new ProductionLine(client);
        productionLine.moveWords();
    // },  2000);

  }

  // cycleClients(clientArray);


}



cycleClients([client_bright, client_shiny])

// function bike(config){
//   // we have our current object
//   console.log(config)
//   // we pass it to the production line constructor
  
//   // this should add our first slide to the dom
//   productionLine.add();
//   // var tl = new TimelineLite({onComplete:dostuff})
//   // 

//   // 


//   productionLine.work()
//   // 
  

// }


// f.describe();
// d.describe();
// f.drive();
// f.warn();



	// setTimeout(function(){ 
	// 	doStuff(); 
	// }, 1500);
	
	// Explain your position

	// tl.add( TweenLite.to(element, 1, {opacity:0}) );

    /// End cool stuff, back to work





  
}); // end document ready
