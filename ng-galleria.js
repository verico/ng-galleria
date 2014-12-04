angular.module('com.verico.ng-galleria', [])
    .directive('ngGalleria', function () {
        return {
            restrict: 'E',
            controller: function galleriaDirectiveCtrl($scope, $element, $timeout) {
                var obj = $element.find('.galleria');
                Galleria.loadTheme('/non_bower_components/galleria/themes/classic/galleria.classic.min.js');
                Galleria.configure({
                    dummy: '/res/img/dummy.gif'
                });

                var GalleriaApiReference;
                $timeout(function () {
                    var index = -1;
                    for(var i = 0; i < $scope.source.images.length; i++){
                        if($scope.source.images[i] === $scope.source.index){
                            index = i;
                            break;
                        }
                    }

                    Galleria.run(obj, {
                        show: index,
                        extend: function(){
                            GalleriaApiReference = this;
                        }
                    });
                });

                $scope.$on('$destroy', function() {
                    if(GalleriaApiReference && GalleriaApiReference.destroy)
                        GalleriaApiReference.destroy();
                });
            },
            template: '<div class="galleria" style="height: 100%; width: 100%">' +
                           '<a href="{{img.image}}" ng-repeat="img in source.images">' +
                              '<img src="{{img.thumb}}">' +
                           '</a>' +
                      '</div>',
            scope: {
                source: '='
            }
        };
    });

