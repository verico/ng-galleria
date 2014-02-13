angular.module('com.verico.ng-galleria', [])
    .directive('ngGalleria', function () {
        return {
            restrict: 'E',
            controller: 'galleriaDirectiveCtrl',
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

function galleriaDirectiveCtrl($scope, $element, $timeout) {
    var  isPhoneGap = function() {
        return (cordova || PhoneGap || phonegap)
            && /^file:\/{3}[^\/]/i.test(window.location.href)
            && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
    };

    var obj = $element.find('.galleria');

    //Detect if cordova is running
    if (!isPhoneGap()) {
        Galleria.loadTheme('non_bower_components/galleria/themes/classic/galleria.classic.min.js');
    }else{
        Galleria.loadTheme('../../non_bower_components/galleria/themes/classic/galleria.classic.min.js');
    }

    Galleria.configure({
        dummy: '/res/img/dummy.gif'
    });

    $timeout(function () {

        var match = _.findWhere($scope.source.images, { image: $scope.source.index.image });
        var index = _.indexOf($scope.source.images, match);

        Galleria.run(obj, {
            show: index
        });
    });

    $scope.$on('$destroy', function() {

    });
}