(function () {
    angular
        .module("WamApp")
        .controller("editWidgetController", editWidgetController);

    function editWidgetController($routeParams, widgetService, $location) {
        var model = this;

        model.widgetId = $routeParams.widgetId;
        model.widget = $routeParams.widget;
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;
        model.trust = trust;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.widgetUrl = widgetUrl;
        model.createWidget = createWidget;

        function createWidget(widgetType){
            var widget ={};
            widget.pageId = model.pageId;
            widget._id = (new Date()).getTime() + "";
            widgetService.createWidget(model.userId, model.websiteId, model.pageId,widgetType, widget)
                .then(function (widgets){
                    model.widgets = widgets;
                });
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget/"+widget._id);
        }

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

        function deleteWidget(widgetId){
            widgetService
                .deleteWidget(model.userId, model.websiteId, model.pageId, widgetId)
                .then(function (widgets){
                    model.widgets = widgets;
                    $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget");
                });

        }

        function updateWidget(widget){
            widgetService
                .updateWidget(model.userId, model.websiteId, model.pageId,model.widgetId,widget)
                .then(function(widgets){
                    model.widgets = widgets;
                    $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget");
                });
        }
        function init() {
            model.userId=$routeParams.userId;
            model.websiteId=$routeParams.wid;
            model.pageId = $routeParams.pageId;
            widgetService.findWidgetsByPageId(model.userId, model.websiteId, model.pageId)
                .then(function (widgets){
                    model.widgets = widgets;
                });
            widgetService.getWidgetTypeById(model.userId, model.websiteId, model.pageId, model.widgetId)
                .then(function (widget){
                    model.widget = widget;
                    model.widgetType = model.widget.widgetType;
                    model.size = model.widget.size;
                    model.text = model.widget.text;
                    model.width = model.widget.width;
                    model.url = model.widget.url;
                });
        }

        init();
    }

 /*   function editPageController($routeParams, pageService, $location){
        var model = this;

        model.updatePage = updatePage;
        model.deletePage = deletePage;

        model.pageId = $routeParams.pageId;
        model.page = $routeParams.page;
        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        function init(){
            model.page =  pageService.findPageById(model.pageId);
        }init();

        function updatePage(pageId, page){
            model.pages = pageService.updatePage(model.pageId, model.page);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page");
        }

        function deletePage(pageId){
            pageService.deletePage(pageId);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page");
        }

    }*/
})();