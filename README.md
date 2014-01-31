
Angular Galleria directive
=================

Angular wrapper for the [Galleria] [galleria]  "Responsive JavaScript Image Gallery"
Dependent on :
* [galleria] [Galleria]
* [jQuery][jquery]
* [underscore] [Underscore]



Getting Started
---------------

Component expects galleria with the classic theme to be found in folder:
'non_bower_components/galleria/'

Edit source if other is desired.




Usage
---------------

Directive got one attribute named 'source'
Bind this up with a object of type:


```html
<script type="text/javascript" src="../../bower_components/jquery/jquery.min.js"></script>
<script type="text/javascript" src="../../bower_components/underscore/underscore-min.js"></script>
<script type="text/javascript" src="../../bower_components/angular/angular.min.js"></script>
<script type="text/javascript" src="../../non_bower_components/galleria/galleria-1.3.3.min.js"></script>
<script type="text/javascript" src="../../bower_components/ng-galleria/ng-galleria.js"></script>

<body ng-controller="MyCtrl">
    <ng-galleria source="images"></ng-galleria>
</body>


```javascript
function MyCtrl($scope) {

    $scope.images = {
            images:[
                {
                    image : "image1.jpg",     // Image url
                    thumb : "image1_thumb.jpg",     // Thumb url
                }
            ],
            index : {     // Selected image object when loaded
                   image : "image1.jpg",
                   thumb : "image1_thumb.jpg",
            }
        }
};






[galleria]: http://galleria.io/
[jQuery]: http://jquery.com/
[underscore]: http://underscorejs.org/