(function() {
  function Messages($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    function getMessages (roomId) {
        var messages = firebase.database().ref().child('messages');
        return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId))
    }

    return {
    getMessages: getMessages
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();
