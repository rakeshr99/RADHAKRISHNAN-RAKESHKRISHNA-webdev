(function (){
    angular
        .module("WamApp")
        .controller("editPageController", editPageController);

    function editPageController($routeParams, pageService, $location){
        var model = this;

        model.updatePage = updatePage;
        model.deletePage = deletePage;

        model.pageId = $routeParams.pageId;
        model.page = $routeParams.page;
        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        function init(){
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
            model.page =  pageService.findPageById(model.pageId);
        }init();

        function updatePage(pageId, page){
            model.pages = pageService.updatePage(model.pageId, model.page);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page");
        }

        function deletePage(pageId){
            pageService.deletePage(pageId);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page");
        }

    }
})();