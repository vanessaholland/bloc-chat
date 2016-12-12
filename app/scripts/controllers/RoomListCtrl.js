(function() {
    function RoomListCtrl(Room, Messages, $rootScope, $scope) {
        this.roomList = Room;
        $scope.rooms = this.roomList.all;

        this.getByRoomId = function (room) {
          var roomId = room.$id;
          $rootScope.roomId = room.$id;
          $rootScope.selectedRoom = room.name;
          $rootScope.messages = Messages.getMessages(roomId);
        }

        this.sendMessage = function () {
          this.newMessage = $scope.newMessage;
          Messages.sendMessage($rootScope.roomId, this.newMessage);
          $scope.newMessage = '';
        }
    }

     angular
         .module('blocChat')
         .controller('RoomListCtrl', ['Room', 'Messages', '$rootScope', '$scope', RoomListCtrl]);
 })();
