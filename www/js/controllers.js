angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


  })

  .controller('ComenziCtrl', function ($scope, StorageService) {
    // Incarca comenzile din local storage
    $scope.$on('$ionicView.enter', function (e) {
      var firma = StorageService.loadData('firma');
      $scope.comenzi = firma.comenzi;
    });
  })

  .controller('ComandaCtrl', function ($scope, StorageService, $stateParams) {
    $scope.comanda = $stateParams
  })

  .controller('CurieriCtrl', function ($scope, StorageService) {
    // Incarca curierii din local storage
    $scope.$on('$ionicView.enter', function (e) {
      var firma = StorageService.loadData('firma');
      $scope.curieri = firma.curieri;
    });
  })

  .controller('CurierCtrl', function ($scope, StorageService, $stateParams) {
    $scope.curier = $stateParams
  })

  .controller('BrowseCtrl', function ($scope, StorageService) {
    $scope.firma = {};
    $scope.firma.curieri = [{
        title: 'Curier1',
        id: 1
      },
      {
        title: 'Curier2',
        id: 2
      },
      {
        title: 'Curier3',
        id: 3
      },
      {
        title: 'Curier4',
        id: 4
      },
      {
        title: 'Curier5',
        id: 5
      },
      {
        title: 'Curier6',
        id: 6
      }
    ];
    $scope.firma.comenzi = [{
        title: 'Comanda1',
        id: 1
      },
      {
        title: 'Comanda2',
        id: 2
      },
      {
        title: 'Comanda3',
        id: 3
      },
      {
        title: 'Comanda4',
        id: 4
      },
      {
        title: 'Comanda5',
        id: 5
      },
      {
        title: 'Comanda6',
        id: 6
      }
    ];
    $scope.$on('$ionicView.enter', function (e) {
      StorageService.saveData('firma', $scope.firma);
    });
  })

  .controller('TabelCtrl', function ($scope, StorageService) {
    // Incarca tot din local storage
    $scope.$on('$ionicView.enter', function (e) {
      $scope.firma = StorageService.loadData('firma');
    });
  })

  .service('StorageService', function () {
    return {
      saveData: function (key, item) {
        window.localStorage.setItem(key, JSON.stringify(item));
      },

      loadData: function (key) {
        return JSON.parse(window.localStorage.getItem(key));
      },

      clearData: function () {
        window.localStorage.clear();
      }
    };
  })
