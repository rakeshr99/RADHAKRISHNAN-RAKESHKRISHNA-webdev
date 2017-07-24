(function (){
    angular
        .module("WamApp")
        .controller("editWebsiteController", editWebsiteController);

    function editWebsiteController($routeParams, websiteService, $location){
        var model = this;

        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        model.websiteId = $routeParams.wid;
        model.website = $routeParams.website;
        model.userId = $routeParams.userId;
        model.userProfile = userProfile;

        function userProfile(){
            $location.url("/profile/"+userId);
        }
        function init(){
            model.websites =  websiteService.findWebsitesForUser(model.userId);
            model.website =  websiteService.findWebsiteById(model.websiteId);
        }init();

        function updateWebsite(websiteId, website){
            model.websites = websiteService.updateWebsite(model.websiteId, model.website);
            $location.url("/user/"+model.userId+"/website");
        }

        function deleteWebsite(websiteId){
            websiteService.deleteWebsite(websiteId);
            $location.url("/user/"+model.userId+"/website");
        }

    }
})();