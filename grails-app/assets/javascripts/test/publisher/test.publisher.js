//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /test/core/test.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("test.publisher", ["ui.router", "ngResource", "test.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('publisher', {
            url: "/publisher",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('publisher.list', {
            url: "",
            templateUrl: "/test/publisher/list.html",
            controller: "PublisherListController as vm"
        })
        .state('publisher.create', {
            url: "/create",
            templateUrl: "/test/publisher/create.html",
            controller: "PublisherCreateController as vm"
        })
        .state('publisher.edit', {
            url: "/edit/:id",
            templateUrl: "/test/publisher/edit.html",
            controller: "PublisherEditController as vm"
        })
        .state('publisher.show', {
            url: "/show/:id",
            templateUrl: "/test/publisher/show.html",
            controller: "PublisherShowController as vm"
        });
}
