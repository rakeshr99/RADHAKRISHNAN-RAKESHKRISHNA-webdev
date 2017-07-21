(function (){
    //this below code makes the module read only
    angular.module("WamApp")
            .controller("loginController", loginController)

    function loginController($location, userService){

        var model = this;
        model.login = login;
        function init(){

        }
        init();
        function login(user){
                    if(!user){
                        model.errorMessage = "Invalid login credentials, the username or password you entered is incorrect";
                        return;
                    }
                    user = userService.findUserByNameAndPassword(user.username, user.password);
                    if(user === null){
                        model.errorMessage = "Invalid login credentials, the username or password you entered is incorrect";
                    }else{
                            $location.url("profile/"+user._id);
                    }

        }
    }

})();

