(function() {
    angular
        .module("WamApp")
        .service("websiteService", websiteService);

    function websiteService(){
        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        this.findWebsitesForUser = findWebsitesForUser;
        this.createWebsite = createWebsite;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        function deleteWebsite(websiteId){
            var website = websites.find(function (website){
                return website._id === websiteId;
            });
            var index = websites.indexOf(website);
            websites.splice(index, 1);
        }

        function updateWebsite(websiteId, website){
            for(var w in websites){
                if(websites[w]._id == websiteId){
                    websites[w].description = website.description;
                    return websites;
                }
            }
        }

        function findWebsiteById(websiteId){
            for(var w in websites){
                if(websites[w]._id === websiteId){
                    return websites[w];
                }
            }
            return null;
        }

        function createWebsite(userId, website){
            website._id = (new Date()).getTime() + "";
            website.developerId = userId;
            websites.push(website);

            return websites;
        }

        function findWebsitesForUser(userId){
            var sites = [];

            for(var w in websites){
                if(websites[w].developerId === userId){
                    sites.push(websites[w]);
                }
            }
            return sites;

        }
    }
})();