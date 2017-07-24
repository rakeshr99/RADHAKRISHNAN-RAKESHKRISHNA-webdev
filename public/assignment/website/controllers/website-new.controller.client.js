(function () {
    angular
        .module("WamApp")
        .controller("newWebsiteController", newWebsiteController)


    function newWebsiteController($routeParams, websiteService, $location){
        var model = this;
        model.createWebsite = createWebsite;

        model.userId = $routeParams.userId;
        model.website = $routeParams.website;
        function init(){
            model.websites =  websiteService.findWebsitesForUser(model.userId);
        }init();

        function createWebsite (website){
            model.websites = websiteService.createWebsite(model.userId, model.website);
            $location.url("/user/"+model.userId+"/website");
        }
    }

})();