(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
        })
        .state('chatRoom', {
          url: '/ChatRoom',
          controller: 'RoomListCtrl as roomList',
          templateUrl: '/templates/chat_room.html'
        });
  }

  angular
    .module('blocChat',['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
    .config(config);
})();
