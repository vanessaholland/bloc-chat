(function() {
    function RoomListCtrl(Room) {
        this.roomList = Room;
       }

     angular
         .module('blocChat')
         .controller('RoomListCtrl', ['Room', RoomListCtrl]);
 })();
