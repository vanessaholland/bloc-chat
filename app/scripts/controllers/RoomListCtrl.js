(function() {
    function RoomListCtrl($firebaseArray) {
         var ref = firebase.database().ref().child("rooms");
         var rooms = $firebaseArray(ref);

         rooms.$loaded().then(function(_rooms){
             console.log("rooms: " + _rooms.length);
         });
         return {
           all: rooms
         };
       }


     angular
         .module('blocChat')
         .controller('RoomListCtrl', ['$firebaseArray', RoomListCtrl]);
 })();
