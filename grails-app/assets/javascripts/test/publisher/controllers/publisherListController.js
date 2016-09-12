//= wrapped

angular
    .module("test.publisher")
    .controller("PublisherListController", PublisherListController);

function PublisherListController(Publisher) {
    var vm = this;

    var max = 10, offset = 0;

    Publisher.list({max: max, offset: offset}, function(data) {
        vm.publisherList = data;
    });
}
