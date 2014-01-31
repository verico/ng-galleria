
Angular Galleria directive
=================

Angular wrapper for the [Galleria] [galleria]
Dependent on : Galleria, Underscore



Getting Started
---------------

Component expects galleria with the classic theme to be found in folder:
--'non_bower_components/galleria/'

Edit source if other is desired.



Directive got one attribute named 'source'

Bind this up with a object of type:

```javascript
source = {
        images:[
            {
                image : "",     // Image url
                thumb : "",     // Thumb url
            }
        ],
        index : {     // Selected image object
               image : "",     // Image url
               thumb : "",     // Thumb url
        }
    }



<!-- links to third party projects -->
[galleria]: http://galleria.io/