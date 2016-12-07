(function() {
    function AddRoomCtrl($uibModal) {

        this.name = '';

        this.open = function () {

            var modalInstance = $uibModal.open({
              templateUrl: '/templates/new_room.html',
              controller: function($scope, $uibModalInstance){
                $scope.cancel = function() {
                      $uibModalInstance.dismiss('cancel');
                };

                $scope.submit = function() {
                      $uibModalInstance.close($scope.name);
                };
              }

             });

             modalInstance.result.then(function (name) {
                    var fb = firebase.database().ref().child("rooms");
                    fb.push({"name":name});
             });
         }
   }


angular
    .module('blocChat')
    .controller('AddRoomCtrl', ['$uibModal', AddRoomCtrl]);
})();
