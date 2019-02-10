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
    <section class="projects-container">
        
    </section>
   `,
    controller: ["$location", function ($location) {
        const vm = this;
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