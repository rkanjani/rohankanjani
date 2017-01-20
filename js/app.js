// Define the `phonecatApp` module
var website = angular.module('websiteApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
website.controller('WebsiteController', function WebsiteController($scope) {

  $scope.jobs = {
          "0" : {
                "name" : "QNX Software",
                "short_name": "blackberry",
                "image": "img/blackberry.png",
                "image-id": "blackberry",
                "role": "Technical Project Manager Intern",
                "description": "I will be working as a Technical Project Management Student at Blackberry this coming Winter term.",
                "link_to": "http://www.blackberry.com"
            },
            "1" : {
                "name" : "Klipfolio",
                "short_name": "klipfolio",
                "image": "img/klipfolio.png",
                "image-id": "klipfolio",
                "role": "Software Developer Intern",
                "description": "Klipfolio is a live business dashboarding startup, where I was tasked to fix bugs and defects, along with develop stunning new features and functionalities.",
                "link_to": "http://www.klipfolio.com"
            },
            "2" : {
                "name" : "Telepin Software",
                "short_name": "telepin",
                "image": "img/telepin-bg.png",
                "image-id": "telepin",
                "role": "Mobile App Developer Intern",
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
                "name" : "deCODE Hackathon",
                "short_name": "decode",
                "image": "img/deCODE.png",
                "image-id": "decode",
                "subject": "Event Organizer",
                "description": "deCODE is a Hackathon that I organize, targetted towards the recruitment of talented developers to high-growth companies.",
                "link_to": "http://www.hackdecode.io"
            },
            "1" : {
                "name" : "EpisodeBrain",
                "short_name": "episodebrain",
                "image": "img/episodebrain.png",
                "image-id": "episodebrain",
                "subject": "TV Show Episode Tracker Extension",
                "description": "EpisodeBrain is a Chrome Extension I created to automatically keep track of what episode I left off on.",
                "link_to": "https://chrome.google.com/webstore/detail/episodebrain/mpjipbifliimiidlkbnhbnlfpoaobcem?hl=en&authuser=2"
            },
            "2" : {
                "name" : "FootyManager",
                "short_name": "footymanager",
                "image": "img/footymanager.png",
                "image-id": "footymanager",
                "subject": "Soccer Tournament Manager",
                "description": "FootyManager is an Android application which organizes and helps manage multiple soccer tournaments.",
                "link_to": "https://play.google.com/store/apps/details?id=oceansfive.footymanager&hl=en"
            },    
            "3" : {
                "name" : "MovieRater",
                "short_name": "movierater",
                "image": "img/star.png",
                "image-id": "movierater",
                "subject": "Movie Recommender System",
                "description": "MovieRater gives users the ability to rate movies they've watched, to then be given recommendations based off their ratings.",
                "link_to": "https://github.com/rkanjani/movierater"
            },    
            "4" : {
                "name" : "uGo!",
                "short_name": "ugo",
                "image": "img/ugo.png",
                "image-id": "ugo",
                "subject": "Conference Travel Grant System (CTGS)",
                "description": "uGo! is a web application that allows graduate students to easily apply for travel grants to attend academic conferences.",
                "link_to": "https://github.com/tmetade/uGo"
            },    
            "5" : {
                "name" : "start it",
                "short_name": "startit",
                "image": "img/startit.png",
                "image-id": "startit",
                "subject": "Google Docs Productivity Extension",
                "description": "start it is a Chrome extension I developed to simplify the process of creating a new document on Google Drive.",
                "link_to": "https://play.google.com/store/apps/details?id=oceansfive.footymanager&hl=en"
            }    
  };


});