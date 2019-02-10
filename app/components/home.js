"use strict";

const home = {
    template: `
    <section class="home-container">
        <section class="home-top">
            <h2 ng-click="$ctrl.goToHome()" class="home-home">Home</h2>
        </section>
        <section class="home-middle-container">
            <section class="home-left">
                <h2 ng-click="$ctrl.goToAbout()" class="home-resume" >About</h2>
            </section>
            <section class=home-logo></section>
            <section class="home-right">
                <h2 ng-click="$ctrl.goToProjects()" class="home-projects">Projects</h2>
            </section>
        </section>
        <section class="home-bottom">
            <h2 ng-click="$ctrl.goToContact()" class="home-contact">Contact</h2>
        </section>
    </section>
   `,
    controller: ["$location", function ($location) {
        const vm = this;
        vm.goToHome = () => {
            $location.path("/");
        }
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
    .component("home", home);
