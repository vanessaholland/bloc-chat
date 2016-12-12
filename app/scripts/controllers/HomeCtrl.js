(function() {
    function HomeCtrl($scope, $cookies) {
      this.heroTitle = "Welcome";
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', '$cookies', HomeCtrl]);
})();
