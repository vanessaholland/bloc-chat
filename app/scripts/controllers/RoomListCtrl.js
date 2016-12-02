(function() {
    function RoomListCtrl(Room, $scope) {
        this.roomList = Room;
        $scope.rooms = this.roomList.all;
    }

     angular
         .module('blocChat')
         .controller('RoomListCtrl', ['Room', '$scope', RoomListCtrl]);
 })();
