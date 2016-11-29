(function(){
  function config($stateProvider, $locationProvider, $firebaseObject){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
  }

  angular
    .module('blocChat',['ui.router', 'firebase'])
    .config(config);
})();
