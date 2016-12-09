(function() {
    function MessageListCtrl(Messages, $scope) {
        this.messageList = Messages;
        $scope.messages = this.messageList.all;
    }

     angular
         .module('blocChat')
         .controller('MessageListCtrl', ['Messages', '$scope', MessageListCtrl]);
 })();
