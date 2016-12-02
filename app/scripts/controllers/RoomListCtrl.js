(function() {
    function RoomListCtrl($scope, $firebaseArray) {
         var ref = firebase.database().ref().child("rooms");
         var rooms = $firebaseArray(ref);

         rooms.$loaded().then(function(_rooms){
             console.log("rooms: " + _rooms.length);
         });
         $scope.rooms = rooms;
    }

    function RoomListCtrl(Room) {
        this.roomList = Room;
    }

    angular
        .module('blocChat')
        .controller('RoomListCtrl', ['$scope', '$firebaseArray', RoomListCtrl]);

 })();
