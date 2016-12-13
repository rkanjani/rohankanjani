// Define the `phonecatApp` module
var website = angular.module('websiteApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
website.controller('WebsiteController', function WebsiteController($scope) {

  $scope.jobs = {
            "0" : {
                "name" : "Blackberry",
                "image": "img/blackberry.png",
                "image-id": "blackberry",
                "shows" : {
                  "0" : {
                    "name": "Naruto Shippuden",
                  }
                }
            },
            "1" : {
                "name" : "Klipfolio",
                "image": "img/klipfolio.png",
                "image-id": "klipfolio",
                "shows" : {
                  "0" : {
                    "name": "Death Note",
                    "episode": "Episode 2"
                  }
                }
            },
            "2" : {
                "name" : "Telepin Software",
                "image": "img/telepin-bg.png",
                "image-id": "telepin",
                "shows" : {
                  "0" : {
                    "name": "Death Note",
                    "episode": "Episode 2"
                  }
                }
            }
  };


});