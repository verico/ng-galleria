Angular Galleria directive.
Wraps Galleria inside a directive.

Dependent on : Galleria, Underscore


Directive got one attribute -> 'source'

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


 Directive expects galleria to be found in folder:
'non_bower_components/galleria/'

Edit source if other is desired.