(function() {
    angular
        .module("WamApp")
        .service("pageService", pageService);

    function pageService($http) {
        var pages = [
            {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
            {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
            {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
        ];


        this.findPageByWebsiteId = findPageByWebsiteId;
        this.createPage = createPage;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        function deletePage(userId, websiteId, pageId){
            var url = "/api/user/"+userId+ "/website/"+websiteId+"/page/"+pageId;
            return $http.delete(url)
                .then(function (response){
                    return response.data;
                })
/*            var page = pages.find(function (page){
                return page._id === pageId;
            });
            var index = pages.indexOf(page);
            pages.splice(index, 1);*/
        }

        function updatePage(userId, websiteId,pageId, page){
            var url = "/api/user/"+userId+ "/website/"+websiteId+"/page/"+pageId;
            return $http.put(url, page)
                .then(function (response){
                    return response.data;
                });
/*            for(var p in pages){
                if(pages[p]._id == pageId){
                    pages[p].description = page.description;
                    return pages;
                }
            }*/
        }

        function findPageById(userId, websiteId, pageId){

            var url = "/api/user/"+userId+ "/website/"+websiteId+"/page/"+pageId;
            return $http.get(url)
                .then( function(response){
                    return response.data;
                });
/*            for(var p in pages){
                if(pages[p]._id === pageId){
                    return angular.copy(pages[p]);
                }
            }
            return null;*/
        }

        function createPage(websiteId, page, userId){

            var url = "/api/user/"+userId+ "/website/"+websiteId+"/page";
            return $http.post(url, page)
                .then (function (response){
                    return response.data;
                });

/*            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            pages.push(page);

            return pages;*/
        }

        function findPageByWebsiteId(websiteId, userId) {

            var url = "/api/user/"+userId+ "/website/"+websiteId+"/page";
            return $http.get(url)
                .then(function (response){
                    return response.data;
                })
 /*           var _pages = [];

            for(var p in pages){
                if(pages[p].websiteId === websiteId){
                    _pages.push(pages[p]);
                }
            }
            return _pages;*/
        }
    }
})();