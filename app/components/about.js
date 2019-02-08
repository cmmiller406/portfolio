"use strict";

const about = {
    template: `
    <header>
        <section class="header-left">
            <h2 ng-click="$ctrl.goToHome()" class="home">Home</h2>
            <h2 ng-click="$ctrl.goToProjects()" class="projects">Projects</h2>
        </section>
        <section class=logo></section>
        <section class="header-right">
            <h2 ng-click="$ctrl.goToAbout()" class="resume" >About</h2>
            <h2 ng-click="$ctrl.goToContact()" class="contact">Contact</h2>
        </section>
    </header>
    <section class="main-info">
        <section class="photo"></section>
        <section class="bio">
            <p>christina marie.</p>
            <p>web developer.</p>
        </section>
    </section>`,
    controller: ["$location", function ($location) {
        const vm = this;
        vm.goToHome = () => {
            $location.path("/");
        };
        vm.goToAbout = () => {
            console.log("Worked!")
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
    .component("about", about);