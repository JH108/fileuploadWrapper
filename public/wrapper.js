angular.module('app')
  .component('wrapper', {
    templateUrl: 'wrapper.html',
    bindings: {
      url: '=',
      progress: '=',
      status: '='
    }
  });