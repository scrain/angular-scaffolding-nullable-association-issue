//= wrapped
//= require /angular/angular
//= require /test/core/test.core
//= require /test/index/test.index
//= require /test/publisher/test.publisher
//= require /test/book/test.book

angular.module("test", [
    "test.core",
    "test.index",
    "test.publisher",
    "test.book"
]);
