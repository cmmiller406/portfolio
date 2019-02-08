"use strict";

angular.module("App", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when("/", {
                template: "<home></home>"
            })
            .when("/projects", {
                template: "<projects></projects>"
            })
            .when("/about", {
                template: "<about></about>"
            })
            .when("/contact", {
                template: "<contact></contact>"
            })
            .otherwise({ redirectTo: "/" })
    }])