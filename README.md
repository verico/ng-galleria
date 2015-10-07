
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


### 3. Set Path
then call the galleriaProvider and set your themes path.

    .config(function (galleriaProvider) {
        galleriaProvider.setPath('assets/galleria/themes/classic/galleria.classic.js');
     }
### 4. Configure 
call the SetOptions method to pass options

    .config(function (galleriaProvider) {
        galleriaProvider.setPath('assets/galleria/themes/classic/galleria.classic.js');
        
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

Directive got one attribute named 'source'. Bind this up with a object of type:


```html
<script type="text/javascript" src="/bower_components/jquery/jquery.min.js"></script>
<script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="/bower_components/galleria/galleria-1.3.3.min.js"></script>
<script type="text/javascript" src="/bower_components/ng-galleria/ng-galleria.js"></script>

<body ng-controller="MyCtrl">
    <ng-galleria source="images"></ng-galleria>
</body>
```

```javascript
function MyCtrl($scope) {

    $scope.images = {
            images:[
                {
                    image : "image1.jpg",       // Image url
                    thumb : "image1_thumb.jpg"  // Thumb url
                }
            ],
            index : {     // Selected image object when loaded
                   image : "image1.jpg",
                   thumb : "image1_thumb.jpg"
            }
        }
};
```
[galleria]: http://galleria.io/
[jQuery]: http://jquery.com/
[bower]: http://twitter.github.com/bower/
