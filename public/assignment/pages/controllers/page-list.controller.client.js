(function () {
    angular
        .module("WamApp")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {

        var model = this;

        model.websiteId = $routeParams.wid;
        function init() {
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
            model.userId=$routeParams.userId;
            model.websiteId=$routeParams.wid;
        }

        init();
    }

})();