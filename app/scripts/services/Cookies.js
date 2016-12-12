(function() {
  function BlocChatCookies($cookies, $uibModal, $rootScope) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log("nom nom nom");
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
              templateUrl: '/templates/new_user.html',
              controller: function ($scope, $uibModalInstance) {
              $scope.userMinLength = 1;

                  $scope.submit = function() {
                    $uibModalInstance.close($scope.user);
                  };
              }
        });

        modalInstance.result.then(function (name) {
            $cookies.put('blocChatCurrentUser', name);
        });
      }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$rootScope', BlocChatCookies]);
})();
