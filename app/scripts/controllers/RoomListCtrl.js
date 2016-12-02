(function() {
    function RoomListCtrl($firebaseArray) {
         var ref = firebase.database().ref().child("rooms");
         var rooms = $firebaseArray(ref);

         console.log("rooms: " + rooms.length);
         return {
           all: rooms
         };
       }


     angular
         .module('blocChat')
         .controller('RoomListCtrl', ['$firebaseArray', RoomListCtrl]);
 })();
