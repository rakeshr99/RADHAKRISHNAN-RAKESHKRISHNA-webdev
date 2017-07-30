(function (){
    angular
        .module("WamApp")
        .controller("widgetListController", widgetListController);

    function widgetListController($sce, $routeParams, widgetService){
        var model = this;

        model.trust = trust;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.widgetUrl = widgetUrl;

        function widgetUrl(widget){
            var url = widgetService.widgetUrl(widget);
            return url;
        }

        function getYouTubeEmbedUrl(linkUrl){
            return widgetService.getYouTubeEmbedUrl(linkUrl);
        }

        function trust(html){
            return widgetService.trust(html);
        }

        function init(){
            model.userId=$routeParams.userId;
            model.websiteId=$routeParams.wid;
            model.pageId = $routeParams.pageId;
            widgetService
                .findWidgetsByPageId(model.userId, model.websiteId, model.pageId)
                .then(function (widgets){
                    model.widgets = widgets;
                });

        }init();
    }
})();