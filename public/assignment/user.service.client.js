(function (){
    angular
        .module("WamApp")
        .factory("userService", userService);// two ways of creating this

    function userService(){
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];
        var api = {
            "findUserByNameAndPassword" : findUserByNameAndPassword,
            "findUserById" : findUserById,
            "registerUser" : registerUser,
            "findUserByUsername" : findUserByusername,
            "updateUser" : updateUser

        };
        return api;

        function updateUser(userId, user){
            for(var u in users){
                if(users[u]._id === userId){
                    users[u] = user;
                    return users[u];
                }
            }return null;
        }
        function findUserByusername(username){
            for(var u in users){
                if(users[u].username === username){
                    return users[u];
                }else{
                    return null;
                }
            }
        }

        function registerUser(user){
            user._id = (new Date()).getTime() + "";
            users.push(user);
            return user;
        }

        function findUserById(userId){
            for(var u in users){
                if(users[u]._id === userId){
                    return users[u];
                }
            }return null;
        }

        function findUserByNameAndPassword(username, password){
                for(u in users){
                    var _user = users[u];
                    if(_user.username === username && _user.password === password){
                        return _user;
                    }
                }return null;
        }
    }
})();