"use strict";

const about = {
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
    <section class="about-container">
        <section class="past-container">
            <h3>Past</h3>
            <p class="about">I began my journey at Michigan State University where I received my Bachelor's degree in psychology. I then traveled to Detroit and pursued my love for learning and obtained my Master's degree in School & Community Psychology from Wayne State University. So how did I get where I'm at now? After working for two years as a school psychologist in schools ranging from elementary to high school, I realized I wasn't feeling the sense of satisfaction that I was hoping for in a career and was quickly feeling burned out. This past summer, I did some self-reflection and made the decision to change careers.</p>
            <p class="about">But why coding? Coding allows me to take my love for learning and continually grow and learn new tools and skills. I absolutely love puzzles and coming up with solutions to problems that help people in the real world. Having the ability to create something useful out of nothing is so inspiring to me and it gives me the feeling like I'm making a difference.</p>
            <p class="about">After taking an Intro to Coding class at Grand Circus, I decided to go for it and fully commit to my career change. I enrolled in the 12-week, full-time, Front-End Bootcamp and learned various tools including:</p>
            <ul>
                <li>HTML5</li> 
                <li>CSS3</li> 
                <li>JavaScript</li> 
                <li>jQuery</li> 
                <li>AngularJS</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Test Driven Development </li>
            </ul>
            <p class="about">I frequently worked as part of a team and learned how to pair program and work in an Agile environment. I also learned how to properly troubleshoot and debug my code. The awesome part of Grand Circus is their emphasis on soft skills training. They taught us various skills such as professionalism, communication skills, combating imposter syndrome, and tips to successfully find and succeed in a tech career.</p>
        </section>
        <section class="present-container">
            <h3>Present</h3>
            <p class="about">Even though I successfully graduated from Grand Circus back in December, I'm continuing to expand my knowledge and experience with various tools. I've been working on improving past Grand Circus projects with classmates and learning new tools including React. I'm actively searching for a development position which allows me to continue learning and use my passion for technology to make a difference.</p>
        </section>
        <section class="future-container">
            <h3>Future</h3>
            <p class="about">My hope for the future is to continue growing professionally and personally. To provide mentorship to other women looking to break into the tech field as well as step into a leadership role at a company that values hard-work, creativity, and innovation.</p>
        </section>
    </section>
    `,
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