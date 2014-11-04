/**
 * myProgress
 *
 *  <my-progress
 *      data-type="bar"
 *      data-add-cls="success striped"
 *      data-value="model.progress.stepscompleted"
 *      data-max="model.progress.stepstotal"
 *    ></my-progress>
 */

angular.module('cask-angular-progress', []).directive('myProgress',
function myProgressDirective () {
  return {
    restrict: 'E',
    templateUrl: "cask-angular-myProgress/bar.html",
    replace: true,
    scope: {
      addCls: '@',
      value: '=',
      max: '='
    },
    link: function(scope, element, attrs) {

      scope.$watch('value', function(newVal) {
        var max = parseInt(scope.max, 10) || 100;

        scope.percent = Math.floor((newVal / max) * 100);

        var cls = {
          'active': (newVal < max),
          'progress-bar': true
        };

        if(scope.addCls) {
          angular.forEach(scope.addCls.split(' '), function(add) {
            if(add) {
              switch (attrs.type) {
                case 'bar':
                /* falls through */
                default:
                  cls['progress-bar-'+add] = true;
                  break;
              }
            }
          });
        }


        scope.cls = cls;
      });
    }

  };
});
