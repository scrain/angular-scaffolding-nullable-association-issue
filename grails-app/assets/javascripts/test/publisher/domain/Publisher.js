//= wrapped
//= require /angular/angular-resource

angular
    .module("test.publisher")
    .factory("Publisher", Publisher);

function Publisher($resource) {
    var Publisher = $resource(
        "publisher/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Publisher.list = Publisher.query;

    Publisher.prototype.toString = function() {
        return 'test.Publisher : ' + (this.id ? this.id : '(unsaved)');
    };

    return Publisher;
}
