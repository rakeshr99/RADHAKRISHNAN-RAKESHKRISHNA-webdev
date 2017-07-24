(function (){
    //this below code makes the module read only
    angular.module("WamApp")
            .controller("profileController", profileController);

    function profileController($routeParams, userService, $location){
        var model = this;
        var userId = $routeParams["userId"];
        model.userId = userId;

        model.updateUser = updateUser;
        model.unregister = unregister;
        function init() {
            var userId = $routeParams["userId"];
            model.userId = userId;
            model.user = userService.findUserById(userId);

        }
        init();

        function updateUser(user){
            var _user= userService.updateUser(userId, user);
            $location.url("/profile/"+_user._id);
        }

        function unregister(userId){
            userService.unregister(userId);
            $location.url("/login");
        }
    }

})();

