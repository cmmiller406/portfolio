"use strict";

const projects = {
    template: `
    <header>
        <section class="header-left">
            <h2 ng-click="$ctrl.goToHome()" class="home">Home</h2>
            <h2 ng-click="$ctrl.goToAbout()" class="resume" >About</h2>
            
        </section>
        <section class=logo></section>
        <section class="header-right">
            <h2 ng-click="$ctrl.goToProjects()" class="projects">Projects</h2>
            <h2 ng-click="$ctrl.goToContact()" class="contact">Contact</h2>
        </section>
    </header>
    <section class="projects-container" ng-repeat="project in $ctrl.projects track by $index">
        <img src="{{project.src}}" class="project-display">
        <section class="project-info">
            <p><span>Name:</span> {{project.name}}</p>
            <p><span>Description:</span> {{project.description}}</p>
            <p><span>Tools Used:</span> {{project.tools}}</p>
            <p>Click <a href="{{project.url}}">here</a> to check it out!</p>
        </section>
    </section>
   `,
    controller: ["$location", function ($location) {
        const vm = this;

        vm.projects = [
            {
                name: "Burger Burner",
                description: "An app that calculate how many miles away you have to park to burn off all the calories you eat at McDonald's.",
                tools: "HTML, CSS, CSS Animations, JavaScript, AngularJS, Anime.js, Node.js, Express, PostgreSQL",
                url: "https:burger-burner.herokuapp.com",
                src: "burger-burner.png"
            },
            {
                name: "Film Finder",
                description: "A film finder app that allows you to search for movies by keyword and filter by year. Users can also create a watch list of movies.",
                tools: "HTML, CSS, JavaScript, AngularJS, The Movie Database API",
                url: "https://github.com/cmmiller406/AngularJS-Project",
                src: "film-finder.png"
            },
            {
                name: "Memory Quest",
                description: "A memory card game where users match cards in order to save the prince.",
                tools: "HTML, CSS, JavaScript, jQuery",
                url: "https://github.com/cmmiller406/MemoryGame",
                src: "memory-quest.png"
            }
        ];

        vm.goToHome = () => {
            $location.path("/");
        };
        vm.goToAbout = () => {
            $location.path("/about");
        };
        vm.goToProjects = () => {
            $location.path("/projects");
        };
        vm.goToContact = () => {
            $location.path("/contact");
        };
    }]
};

angular
    .module("App")
    .component("projects", projects);