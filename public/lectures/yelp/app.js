(function(){
    angular
        .module("YelpApp", [])
        .controller("searchController", searchController)
        .service("restaurantService", restaurantService);

    function init(){

    }init();

    function restaurantService($http){
        this.searchRestaurantByTitle = searchRestaurantByTitle;

        function searchRestaurantByTitle(title){
            var accessToken = [];
            var accessTokenEndpointUrl = "https://api.yelp.com/oauth2/token";

            var promise = $http({method: 'POST', url: accessTokenEndpointUrl, headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Access-Control-Allow-Origin": "*"},
                body: {'grant_type':'client_credentials', 'client_id': 'IxPjAaoDsjXWxu7uiGZ_Rw',
                'client_secret': '7sOmpAgiqReLloF4GSGTs6VGY1ziJc89T1p3VMsIPnPqrTYTp9LHw8a7vkRZauzg'}
            });

            promise
                .then(function(response){
                    accessToken = response.data;
                });

            alert(accessToken[0]);
            //var searchEndpointUrl = "https://api.yelp.com/v3/businesses/search?term="+title+"&location=boston";

        }
    }
    function searchController(restaurantService){
        var model =this;

        model.searchRestaurantByTitle = searchRestaurantByTitle;

        function searchRestaurantByTitle(title){
            //alert(title);
            restaurantService.searchRestaurantByTitle(title);
        }


    }
})();