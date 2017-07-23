(function (){
    //this below code makes the module read only
    angular.module("WamApp")
            .config(configuration);

    function configuration($routeProvider){
        $routeProvider
            .when("/login", {
                templateUrl:"user/templates/login.view.client.html",
                controller : "loginController",
                controllerAs : "model"})
            .when("/register", {
                templateUrl : "user/templates/register.view.client.html",
                controller : "registerController",
                controllerAs : "model"})
            .when("/profile/:userId", {
                templateUrl : "user/templates/profile.view.client.html",
                controller : "profileController",
                controllerAs : "model"})
            .when("/user/:userId/website", {
                templateUrl : "website/templates/website-list.view.client.html",
                controller : "websiteListController",
                controllerAs : "model"})
            .when("/user/:userId/website/new", {
                templateUrl : "website/templates/website-new.view.client.html",
                controller : "newWebsiteController",
                controllerAs : "model"
                })
            .when("/user/:userId/website/:wid", {
                templateUrl : "website/templates/website-edit.view.client.html",
                controller : "editWebsiteController",
                controllerAs : "model"
            })
            .when("/user/:userId/website/:wid/page", {
                templateUrl : "pages/templates/page-list.view.client.html",
                controller : "pageListController",
                controllerAs : "model"
            })
            .when("/user/:userId/website/:wid/page/new", {
                templateUrl : "pages/templates/page-new.view.client.html",
                controller : "newPageController",
                controllerAs : "model"
            })
            .when("/user/:userId/website/:wid/page/:pageId", {
                templateUrl : "pages/templates/page-edit.view.client.html",
                controller : "editPageController",
                controllerAs : "model"
            })
            .when("/user/:userId/website/:wid/page/:pageId/widget", {
                templateUrl : "widget/templates/widget-list.view.client.html",
                controller : "widgetListController",
                controllerAs : "model"
            })
            .when("/user/:userId/website/:wid/page/:pageId/widget/new", {
                templateUrl : "widget/templates/widget-choose.view.client.html",
                controller : "newWidgetController",
                controllerAs : "model"
            })
            .when("/user/:userId/website/:wid/page/:pageId/widget/:widgetId", {
                templateUrl : "widget/templates/widget-edit.view.client.html",
                controller : "editWidgetController",
                controllerAs : "model"
            })

    }
})();

