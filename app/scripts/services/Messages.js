(function() {
  function Messages($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    function getMessages (roomId) {
        var messages = firebase.database().ref().child('messages');
        return $firebaseArray(messages.orderByChild('roomId').equalTo(roomId))
    }

    function currentTime () {
      var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
      return h + ":" + m;
    }

    function sendMessage (roomId, newMessage) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        var message = {
                username: currentUser,
                content: newMessage,
                sentAt: currentTime(),
                roomId: roomId
            }
            messages.$add(message);

      }

    return {
    getMessages: getMessages,
    sendMessage: sendMessage
    };
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$cookies', Messages]);
})();
