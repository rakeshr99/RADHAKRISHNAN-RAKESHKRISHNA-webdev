(function () {
    angular
        .module("WamApp")
        .controller("newWidgetController", newWidgetController);

    function newWidgetController($routeParams, $location, widgetService){
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pageId;

        this.createWidget = createWidget;
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

        function createWidget(widgetType){
            var widget ={};
            widget.pageId = model.pageId;
            widget._id = (new Date()).getTime() + "";
            widgetService.createWidget(model.userId, model.websiteId, model.pageId, widgetType, widget)
                .then(function(widgets){
                    model.widgets = widgets;
                });
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget/"+widget._id);
        }

        function init(){
            widgetService.findWidgetsByPageId(model.pageId)
                .then(function(widgets){
                    model.widgets = widgets;
                })
        }init();
    }


/*    function newPageController($routeParams, pageService, $location){
        var model = this;
        model.createPage = createPage;

        model.websiteId = $routeParams.wid;
        model.page = $routeParams.page;
        function init(){
        }init();

        function createPage (website){
            model.pages = pageService.createPage(model.websiteId, model.page);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page");
        }
    }*/

})();