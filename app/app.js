'use strict';

angular.module('myApp', [])
  .controller('MainController', ['$scope', function ($scope) {
    $scope.restaurants = [
      {
        nom: 'La cabane a mozza',
        adresse: {
          ville: 'Grenoble',
          cp: 38000,
          rue: 'Rue Auguste Gaché',
          numero: 2
        },
        derniereVisite: '04/11/2019',
        note: 17,
        proprietaire: "Francois DUPONT",
        email: "francois.dupont@gmail.com",
        commentaire: ''
      },
      {
        nom: 'Le Gratin Dauphinois',
        adresse: {
          ville: 'Grenoble',
          cp: 38000,
          rue: 'Avenue Felix Viallet',
          numero: 52
        },
        derniereVisite: '16/10/2019',
        note: 15,
        proprietaire: "Elvis",
        email: "elvis@god.com",
        commentaire: ''
      },
      {
        nom: 'Chez Nous',
        adresse: {
          ville: 'Grenoble',
          cp: 38000,
          rue: 'Place Championnet',
          numero: null
        },
        derniereVisite: '01/11/2019',
        note: 16,
        proprietaire: "Bono",
        email: "bono@u2.com",
        commentaire: ''
      },
      {
        nom: 'Et si',
        adresse: {
          ville: 'Grenoble',
          cp: 38000,
          rue: 'rue de Strasbourg',
          numero: 16
        },
        derniereVisite: '03/11/2019',
        note: 14,
        proprietaire: "Angus YOUNG",
        email: "angus.young@gmail.com",
        commentaire: ''
      },
      {
        nom: 'L\'Hambourgeois',
        adresse: {
          ville: 'Grenoble',
          cp: 38000,
          rue: 'rue Bayard Quartier des Antiquaires',
          numero: 11
        },
        derniereVisite: '26/10/2019',
        note: 16,
        proprietaire: "Jeff BUCKLEY",
        email: "jeff.buckley@gmail.com",
        commentaire: ''
      }
    ]

    $scope.selected = 0
  }]);
