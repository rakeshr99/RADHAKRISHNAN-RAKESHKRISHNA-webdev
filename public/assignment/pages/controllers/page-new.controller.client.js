(function () {
    angular
        .module("WamApp")
        .controller("newPageController", newPageController);


    function newPageController($routeParams, pageService, $location){
        var model = this;
        model.createPage = createPage;

        model.websiteId = $routeParams.wid;
        model.page = $routeParams.page;
        function init(){
        }init();

        function createPage (website){
            model.pages = pageService.createPage(model.websiteId, model.page);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page");
        }
    }

})();