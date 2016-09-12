//= wrapped
//= require /angular/angular-resource

angular
    .module("test.book")
    .factory("Book", Book);

function Book($resource, domainListConversion, domainConversion) {
    var Book = $resource(
        "book/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Publisher", "publisher", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("Publisher", "publisher")]}}
    );

    Book.list = Book.query;

    Book.prototype.toString = function() {
        return 'test.Book : ' + (this.id ? this.id : '(unsaved)');
    };

    return Book;
}
