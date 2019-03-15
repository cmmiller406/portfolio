"use strict";

const contact = {
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
    <section class="main-info">
        <section class="photo"></section>
        <section class="bio">
            <p id="name">christina marie.</p>
        </section>
    </section>
    <section class="contact-form">
        <form action="https://formspree.io/cmmiller.406@gmail.com" method="POST" >
            <p class="contact-header">Want to collaborate? Feel free to reach out!</p>
            <section class="contact-nameemail">
                <input id="contact-name" type="text" placeholder="Name" name="name">
                <input id="contact-email" type="email" placeholder="Email" name="name">
            </section>
            <textarea id="contact-message" placeholder="Your Message" name="name"></textarea>
            <button>Submit</button>
        </form>
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
    .component("contact", contact);