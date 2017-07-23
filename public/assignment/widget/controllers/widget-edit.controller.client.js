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

        function deleteWidget(widgetId){
            model.widgets = widgetService.deleteWidget(widgetId);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget");
        }

        function updateWidget(widget){
            model.widgets = widgetService.updateWidget(model.widgetId,widget);
            $location.url("/user/"+model.userId+"/website/"+model.websiteId+"/page/"+model.pageId+"/widget");
        }
        function init() {
            model.widget = widgetService.getWidgetTypeById(model.widgetId);
            model.widgetType = model.widget.widgetType;
            model.size = model.widget.size;
            model.text = model.widget.text;
            model.width = model.widget.width;
            model.url = model.widget.url;
            model.userId=$routeParams.userId;
            model.websiteId=$routeParams.wid;
            model.pageId = $routeParams.pageId;
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