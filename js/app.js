// Define the `phonecatApp` module
var website = angular.module('websiteApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
website.controller('WebsiteController', function WebsiteController($scope) {

  $scope.jobs = {
          "0" : {
                "name" : "Blackberry",
                "short_name": "blackberry",
                "image": "img/blackberry.png",
                "image-id": "blackberry",
                "role": "Technical Project Manager (CO-OP)",
                "description": "I will be working as a Technical Project Management Student at Blackberry this coming Winter term.",
                "link_to": "http://www.blackberry.com"
            },
            "1" : {
                "name" : "Klipfolio",
                "short_name": "klipfolio",
                "image": "img/klipfolio.png",
                "image-id": "klipfolio",
                "role": "Frontend Developer (CO-OP)",
                "description": "Klipfolio is a live business dashboarding startup, that allows their users to manipulate multiple forms of data to create visualizations that reflect key performance indicators (KPI).",
                "link_to": "http://www.klipfolio.com"
            },
            "2" : {
                "name" : "Telepin Software",
                "short_name": "telepin",
                "image": "img/telepin-bg.png",
                "image-id": "telepin",
                "role": "Mobile App Developer (CO-OP)",
                "description": "Telepin Software is the leading provider of mobile infrastructure software, where I was asked to develop their first cross-platform mobile application.",
                "link_to": "http://www.telepin.com"
            } //,
            // "3" : {
            //     "name" : "Campus Tec",
            //     "short_name": "campustec",
            //     "image": "img/campustec.jpg",
            //     "image-id": "campustec",
            //     "role": "Computer Technician",
            //     "description": "Campus Tec is the University of Ottawa's computer repair store, where I spent my first and second year fixing computers part-time.",
            //     "link_to": "http://www.campustec.ca/"
            // }   
  };


  $scope.projects = {
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