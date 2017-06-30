describe('Main Controller', function() {
  beforeEach(module('app'));
  var $controller,
      controller,
      $scope,
      component;
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  beforeEach(function () {
    $scope = {};
    controller = $controller('MainCtrl', { $scope: $scope });
  });

  it('should exist', function() {
    expect(controller).toBeDefined();
  });
});

describe('wrapper component', function () {
  var $component,
      $compile,
      $rootScope;
  beforeEach(module('app'));
  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
  it('wrapper component should exist', function () {
    expect($component).toBeDefined();
  })
});