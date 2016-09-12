//= wrapped

angular
    .module("test.book")
    .controller("BookEditController", BookEditController);

function BookEditController(Book, $stateParams, $state, Publisher) {
    var vm = this;

    vm.publisherList = Publisher.list();

    Book.get({id: $stateParams.id}, function(data) {
        vm.book = new Book(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve book with ID " + $stateParams.id}];
    });

    vm.updateBook = function() {
        vm.errors = undefined;
        vm.book.$update(function() {
            $state.go('book.show', {id: vm.book.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
