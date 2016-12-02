(function() {
    function HomeCtrl() {
      this.heroTitle = "Welcome";
    };

    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();
