angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, StorageService) {

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
      // Incarca comenzile din local storage
      var firma = StorageService.loadData('firma');

      Object.keys(firma.comenzi.comanda).forEach(function (stkey) {
        // Incarca comanda care are ID-ul primit prin stateParams
        if (firma.comenzi.comanda[stkey].IDcomanda == $stateParams.comandaId)
          $scope.comanda = firma.comenzi.comanda[stkey];
      });
    });
  })

  /*

    ----------------   Browse Controller   ----------------    

  */
  .controller('BrowseCtrl', function ($scope, StorageService) {

    // define(function (require) {
    //   var validator = require('xsd-schema-validator');
    // });


    $scope.firma = {};

    // Variabile pentru a putea afisa in front-end faptul ca fisierele au fost parsate/incarcate sau nu 
    $scope.XMLloadedSuccesfully = -1;
    $scope.XMLparsedSuccesfully = -1;

    // Functia de incarcare a fisierului. Se foloseste de API-ul fileChooser
    $scope.browseXML = function () {
      fileChooser.open(function (uri) {
          $scope.XMLuri = uri;
          $scope.load();
          $scope.XMLloadedSuccesfully = 1;
          $scope.$apply();
          StorageService.saveData('firma', $scope.firma.firma);
          StorageService.saveData('XMLuri', $scope.XMLuri);
        },
        function () {
          alert("File could not be loaded!");
          $scope.XMLloadedSuccesfully = 0;
          $scope.$apply()
        });
    };

    // Functia care parseaza fisierul XMl cu ajutorul API-ului xhr
    $scope.load = function () {
      xhr = new XMLHttpRequest();
      xhr.open('GET', $scope.XMLuri, false);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var x2js = new X2JS();
          var jsonObj = x2js.xml2js(xhr.responseText);
          $scope.firma = angular.copy(jsonObj);
          if ($scope.firma && jsonObj) $scope.XMLparsedSuccesfully = 1;
          else {
            alert("XML could not be parsed!");
            $scope.XMLparsedSuccesfully = 0;
          }
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
      $scope.XMLuri = StorageService.loadData('XMLuri', $scope.XMLuri);

      cleanPage();
      displayResult();
    });

    // Pentru a putea afisa fisierul XML folosind foile de stiluri din XSL
    function loadXMLDoc(filename) {
      if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } else {
        xhttp = new XMLHttpRequest();
      }
      xhttp.open("GET", filename, false);
      try {
        xhttp.responseType = "msxml-document"
      } catch (err) {} // Helping IE11
      xhttp.send("");
      return xhttp.responseXML;
    }

    function displayResult() {
      xml = loadXMLDoc($scope.XMLuri);
      xsl = loadXMLDoc("XML/XSLfirma.xsl");
      // code for IE
      if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        ex = xml.transformNode(xsl);
        document.getElementById("tabelFirma").innerHTML = ex;
      }
      // code for Chrome, Firefox, Opera, etc.
      else if (document.implementation && document.implementation.createDocument) {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        document.getElementById("tabelFirma").appendChild(resultDocument);
      }
    }

    function cleanPage() {
      document.getElementById("tabelFirma").innerHTML = "";
    }
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
