//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /test/core/test.core
//= require /test/publisher/test.publisher
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("test.book", [
    "ui.router",
    "ngResource",
    "test.core",
    "test.publisher"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('book', {
            url: "/book",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('book.list', {
            url: "",
            templateUrl: "/test/book/list.html",
            controller: "BookListController as vm"
        })
        .state('book.create', {
            url: "/create",
            templateUrl: "/test/book/create.html",
            controller: "BookCreateController as vm"
        })
        .state('book.edit', {
            url: "/edit/:id",
            templateUrl: "/test/book/edit.html",
            controller: "BookEditController as vm"
        })
        .state('book.show', {
            url: "/show/:id",
            templateUrl: "/test/book/show.html",
            controller: "BookShowController as vm"
        });
}
