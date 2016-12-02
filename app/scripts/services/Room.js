(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var Room = [];
    rooms.$loaded().then(function(_rooms){
        console.log("rooms: " + _rooms.length);
    });
    return {
      all: rooms
    };

    Room.addRoom = function(roomName) {
      firebase.database().ref().child("rooms").$add({
        name: roomName
      });
    }
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
