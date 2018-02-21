// Define the `phonecatApp` module
var website = angular.module('websiteApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
website.controller('WebsiteController', function WebsiteController($scope) {
  $scope.jobs = {
    "0" : {
          "name" : "Microsoft",
          "date": "May 2018 - August 2018",
          "short_name": "microsoft",
          "image": "img/microsoft.png",
          "image-id": "microsoft",
          "role": "Front End Engineer Intern",
          "description": "Excited to be given the chance to work on the Office 365 team this Summer in Seattle, WA.",
          "link_to": "http://www.kijiji.ca"
    },
    "1" : {
          "name" : "Shopify",
          "date": "January 2018 - Present",
          "short_name": "shopify",
          "image": "img/shopify.png",
          "image-id": "shopify",
          "role": "Front End Developer Intern",
          "description": "Currently working to make commerce better for everyone by developing the Facebook Sales channel within Shopify.",
          "link_to": "http://www.kijiji.ca"
    },
    "2" : {
          "name" : "Kijiji",
          "date": "September 2017 - Present",
          "short_name": "kijiji",
          "image": "img/kijiji.png",
          "image-id": "kijiji",
          "role": "Software Developer Intern",
          "description": "Kijiji is Canada's largest classified site, home to millions of people trying to make an extra buck on the side.",
          "link_to": "http://www.kijiji.ca"
    },
    "3" : {
          "name" : "QNX Software",
          "date": "January 2017 - April 2017",
          "short_name": "blackberry",
          "image": "img/blackberry.png",
          "image-id": "blackberry",
          "role": "Technical Project Manager Intern",
          "description": "QNX Software is a Blackberry subsidiary which works in the autonomous vehicle software industry, where I was worked with their several high profile clients to establish development milestones and help push support tickets through the pipeline.",
          "link_to": "http://www.blackberry.com"
    },
    "4" : {
        "name" : "Klipfolio",
        "date": "May 2016 - August 2016",
        "short_name": "klipfolio",
        "image": "img/klipfolio.png",
        "image-id": "klipfolio",
        "role": "Software Developer Intern",
        "description": "Klipfolio is a live business dashboarding startup, where I was tasked to fix bugs and defects, along with develop stunning new features and functionalities.",
        "link_to": "http://www.klipfolio.com"
    },
    "5" : {
        "name" : "Telepin Software",
        "date": "May 2015 - August 2015",
        "short_name": "telepin",
        "image": "img/telepin.png",
        "image-id": "telepin",
        "role": "Mobile App Developer Intern",
        "description": "Telepin Software is the leading provider of mobile infrastructure software, where I was asked to develop their first cross-platform mobile application.",
        "link_to": "http://www.telepin.com"
    },
    "6" : {
        "name" : "Campus Tec",
        "date": "January 2015 - December 2015",
        "short_name": "campustec",
        "image": "img/campustec.jpg",
        "image-id": "campustec",
        "role": "Computer Technician",
        "description": "Campus Tec is the University of Ottawa's computer repair store, where I spent my first and second year fixing computers part-time.",
        "link_to": "http://www.campustec.ca/"
    }
  };


  $scope.projects = {
    "0" : {
          "name" : "deCODE Hackathon",
          "date": "January 2016 - Present",
          "short_name": "decode",
          "image": "img/deCODE.png",
          "image-id": "decode",
          "subject": "Event Organizer",
          "description": "deCODE is a Hackathon that I organize, targetted towards the recruitment of talented developers to high-growth companies.",
          "link_to": "http://www.hackdecode.io"
      },
      "1" : {
          "name" : "EpisodeBrain",
          "date": "November 2016 - Present",
          "short_name": "episodebrain",
          "image": "img/episodebrain.png",
          "image-id": "episodebrain",
          "subject": "TV Show Episode Tracker Extension",
          "description": "EpisodeBrain is a Chrome Extension I created to automatically keep track of what episode the user previously watched on streaming websites.",
          "link_to": "https://chrome.google.com/webstore/detail/episodebrain/mpjipbifliimiidlkbnhbnlfpoaobcem?hl=en&authuser=2"
      },
      "2" : {
          "name" : "FootyManager",
          "date": "November 2016 - December 2016",
          "short_name": "footymanager",
          "image": "img/footymanager.svg",
          "image-id": "footymanager",
          "subject": "Soccer Tournament Manager",
          "description": "FootyManager is an Android application which organizes and helps manage multiple soccer tournaments.",
          "link_to": "https://play.google.com/store/apps/details?id=oceansfive.footymanager&hl=en"
      },
      "3" : {
          "name" : "MovieRater",
          "date" : "February 2016 - March 2016",
          "short_name": "movierater",
          "image": "img/star.png",
          "image-id": "movierater",
          "subject": "Movie Recommender System",
          "description": "MovieRater gives users the ability to rate movies they've watched, to then be given recommendations based off their ratings.",
          "link_to": "https://github.com/rkanjani/movierater"
      },
      "4" : {
          "name" : "uGo!",
          "date" : "October 2016 - December 2016",
          "short_name": "ugo",
          "image": "img/ugo.png",
          "image-id": "ugo",
          "subject": "Conference Travel Grant System (CTGS)",
          "description": "uGo! is a web application that allows graduate students to easily apply for travel grants to attend academic conferences.",
          "link_to": "https://github.com/tmetade/uGo"
      },
      "5" : {
          "name" : "start it",
          "date" : "November 2016 - December 2016",
          "short_name": "startit",
          "image": "img/startit.png",
          "image-id": "startit",
          "subject": "Google Docs Productivity Extension",
          "description": "start it is a Chrome extension I developed to simplify the process of creating a new document on Google Drive.",
          "link_to": "https://play.google.com/store/apps/details?id=oceansfive.footymanager&hl=en"
      }
  };

  $scope.smLinks = {
    "0" : {
      "url":"http://www.facebook.com/rohankanjani1",
      "class":"facebook",
      "img":"img/facebook.png",
      "name":"facebook"
    },
    "1": {
      "url":"http://www.facebook.http://www.github.com/rkanjani",
      "class":"github",
      "img":"img/github.png",
      "name":"github"
    },
    "2": {
      "url":"http://ca.linkedin.com/in/rohan-kanjani-13b25884",
      "class":"linkedin",
      "img":"img/linkedin.png",
      "name":"linkedin"
    },
    "3": {
      "url":"./files/RohanKanjani.pdf",
      "class":"resume",
      "img":"img/resume.png",
      "name":"resume"
    }
  }


 $("#name").typed({
    strings: ["rohan kanjani"],
    typeSpeed: 80,
    showCursor: false,
    callback: function(){
      $("#position").typed({
        strings:["ottawa | mississauga"],
        showCursor: false,
        typeSpeed: 50,
        callback: function(){
          $(".social-button").each(function(index){
              $(this).addClass("animated slideInLeft").css("visibility", "visible");
          })
        }
      });
    }
  });
});
