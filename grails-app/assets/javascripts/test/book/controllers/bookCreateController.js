//= wrapped

angular
    .module("test.book")
    .controller("BookCreateController", BookCreateController);

function BookCreateController(Book, $state, Publisher) {

    var vm = this;
    vm.publisherList = Publisher.list();
    vm.book = new Book();
    
    vm.saveBook = function() {
        vm.errors = undefined;
        vm.book.$save({}, function() {
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
