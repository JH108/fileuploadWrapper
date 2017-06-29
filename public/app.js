angular.module('app', [])
  .controller('MainCtrl', function($scope, $timeout, $http, $sce) {
    var scope = this;
    scope.url = '';
    scope.progress = 0;
    scope.status = 'idle';
    scope.wistiapass = '48517c0434beb9b191dd44a2481e73e24de370dc15ab06fd9a9aa24b57602f4b';
    scope.checkStatus = function() {
      $http({
        method: 'GET',
        url: 'https://api.wistia.com/v1/medias/' + scope.hashId + '.json?api_password=' + scope.wistiapass
      }).then(function(response) {
        scope.status = response.data.status || '';
        if (scope.status === 'ready') {
          scope.url = $sce.trustAsResourceUrl('http://fast.wistia.net/embed/iframe/' + scope.hashId);
        } else if (scope.status !== 'failed') {
          $timeout(function() {
            scope.checkStatus();
          }, 3000);
        }
      });
    }
    scope.uploadFile = function() {
      $('#fileupload').fileupload({
        dataType: 'json',
        formData: {
          api_password: scope.wistiapass
        },
        add: function(error, data) {
          scope.hashId = '';
          scope.progress = 0;
          scope.status = 'uploading';
          scope.url = '';

          data.submit();
        },
        done: function(error, data) {
          if (data.result.hashed_id !== '') {
            scope.hashId = data.result.hashed_id;
            scope.checkStatus();
          }
        },
        progressall: function (error, data) {
          if (data.total > 0) {
            $scope.$apply(function() {
              scope.progress = parseInt(data.loaded / data.total * 100, 10);
            });
          }
        }
      });
    };
    $timeout(scope.uploadFile, 2000);
  });