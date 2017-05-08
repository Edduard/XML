angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, StorageService) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

  })

  /*

    ----------------   Comenzi Controller   ----------------    

  */
  .controller('ComenziCtrl', function ($scope, StorageService) {
    // Incarca comenzile din local storage
    $scope.$on('$ionicView.enter', function (e) {
      var firma = StorageService.loadData('firma');
      $scope.comenzi = firma.comenzi.comanda;
    });
  })



  /*

    ----------------   Comanda Controller   ----------------    

  */
  .controller('ComandaCtrl', function ($scope, StorageService, $stateParams) {

    $scope.$on('$ionicView.enter', function (e) {
      var firma = StorageService.loadData('firma');

      Object.keys(firma.comenzi.comanda).forEach(function (stkey) {
        // Get the order with the specific ID
        if (firma.comenzi.comanda[stkey].IDcomanda == $stateParams.comandaId)
          $scope.comanda = firma.comenzi.comanda[stkey];
      });
    });
  })


  /*

    ----------------   Curieri Controller   ----------------    

  */
  .controller('CurieriCtrl', function ($scope, StorageService) {
    // Incarca curierii din local storage
    $scope.$on('$ionicView.enter', function (e) {
      var firma = StorageService.loadData('firma');
      $scope.curieri = firma.curieri;
    });
  })



  /*

    ----------------   Curier Controller   ----------------    

  */
  .controller('CurierCtrl', function ($scope, StorageService, $stateParams) {
    $scope.curier = $stateParams
  })



  /*

    ----------------   Browse Controller   ----------------    

  */
  .controller('BrowseCtrl', function ($scope, StorageService) {

    // define(function (require) {
    //   var validator = require('xsd-schema-validator');
    // });


    $scope.firma = {};
    $scope.XMLloadedSuccesfully = false;

    $scope.browseXML = function () {
      fileChooser.open(function (uri) {
          $scope.XMLuri = uri;
          $scope.load();
          $scope.XMLloadedSuccesfully = true;
          $scope.$apply();
          StorageService.saveData('firma', $scope.firma.firma);
          StorageService.saveData('XMLuri', $scope.XMLuri);
        },
        function () {
          alert("File could not be loaded!");
          $scope.XMLloadedSuccesfully = false;
          $scope.$apply()
        });
    };

    $scope.load = function () {
      xhr = new XMLHttpRequest();
      xhr.open('GET', XMLuri, false);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var x2js = new X2JS();
          var jsonObj = x2js.xml2js(xhr.responseText);
          $scope.firma = angular.copy(jsonObj);
        }
      }
      xhr.send();
    };
  })

  /*

    ----------------   Tabel Controller   ----------------    

  */
  .controller('TabelCtrl', function ($scope, StorageService) {
    // Incarca tot din local storage
    $scope.$on('$ionicView.enter', function (e) {
      $scope.firma = StorageService.loadData('firma');
    });
  })

  /*

    ----------------   Storage Service   ----------------    

  */
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
