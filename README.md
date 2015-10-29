
Angular Galleria directive
=================

Angular wrapper for the [Galleria] [galleria]  "Responsive JavaScript Image Gallery"
Dependent on :
* [galleria][Galleria]
* [jQuery][jquery]



Getting Started
---------------

### 1. Install
* Install with [Bower][bower]: `$ bower install ng-galleria`


### 2. Include Module
It is required to set a path where the desired galleria theme is to be found.

Include the module to your app

    angular.module('myModule', ['com.verico.ng-galleria']);


### 3. Set Path(optional)
then call the galleriaProvider and set your themes path. 

    // If not set, default path ./bower_components/galleria/src/themes/classic/galleria.classic.js will be used.
    .config(function (galleriaProvider) {
        galleriaProvider.setPath('./bower_components/galleria/src/themes/classic/galleria.classic.js');
     }
### 4. Configure 
call the SetOptions method to pass options

    .config(function (galleriaProvider) {
        galleriaProvider.setPath('./bower_components/galleria/src/themes/classic/galleria.classic.js');
        
        galleriaProvider.setOptions({
                    dummy: '/res/img/dummy.gif',
                    _toggleInfo: false,
                    showInfo:true,
                    transition: 'slide',
                    imageCrop: true
                });
     }

Usage
---------------


HTML:

```html
  <script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
  <script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
  <script type="text/javascript" src="bower_components/galleria/src/galleria.js"></script>
  <script type="text/javascript" src="ng-galleria.js"></script>

  <body ng-controller="MyCtrl">
      <ng-galleria source="images"></ng-galleria>
  </body>
  
```

JS:

```javascript
angular.module('myGalleriaApp', ['com.verico.ng-galleria'])
            // Optional
            .config(function (galleriaProvider) {
                galleriaProvider.setPath('./bower_components/galleria/src/themes/classic/galleria.classic.js');
            })
            .controller('MyCtrl', MyCtrl);

function MyCtrl($scope) {
  var images =  [
  {
    image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/250px-AngularJS_logo.svg.png",       // Image url
    thumb : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/250px-AngularJS_logo.svg.png"  // Thumb url
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/250px-React.js_logo.svg.png",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/250px-React.js_logo.svg.png"
  }];

  $scope.images = {
    images:images,
    index : images[0]    
  }  
}


```
[galleria]: http://galleria.io/
[jQuery]: http://jquery.com/
[bower]: http://twitter.github.com/bower/
