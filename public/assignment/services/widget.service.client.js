(function() {
    angular
        .module("WamApp")
        .service("widgetService", widgetService);

    function widgetService($sce) {
        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Three years late and costing $12.9 billion, the USS Gerald R. Ford finally gets commissioned today at Norfolk Naval Station in Virginia. The latest aircraft carrier to join the American fleet has been burdened with—and this may shock you, considering we are talking about defense spending—cost overruns and significant…</p>"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        this.getWidgetTypeById = getWidgetTypeById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.getWidgetIdByWidgetType = getWidgetIdByWidgetType;
        this.createWidget = createWidget;
        this.getWidgetByWidgetId = getWidgetByWidgetId;
        this.trust = trust;
        this.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        this.widgetUrl = widgetUrl;

        function widgetUrl(widget){
            var url = 'widget/templates/widget-'+widget.widgetType.toLowerCase()+'.view.client.v1.html';
            return url;
        }

        function getYouTubeEmbedUrl(linkUrl){
            var embedUrl = "https://www.youtube.com/embed/";
            var linkUrlParts = linkUrl.split('/');
            embedUrl += linkUrlParts[linkUrlParts.length-1];
            return $sce.trustAsResourceUrl(embedUrl);
        }

        function trust(html){
            return $sce.trustAsHtml(html);
        }

        function getWidgetByWidgetId(widgetId){
            return widgets;
        }

        function createWidget(widgetType, widget){
            widget.widgetType = widgetType;
            widgets.push(widget);
            return widgets;
        }


        function getWidgetIdByWidgetType(widgetType){
            //var counter=0;
            for(var w in widgets){
                if(widgets[w].widgetType === widgetType){
                    return widgets[w]._id;
                }
            }
        }

        function findWidgetsByPageId(pageId) {
            var _widgets = [];

            for(var w in widgets){
                if(widgets[w].pageId === pageId){
                    _widgets.push(widgets[w]);
                }
            }
            return _widgets;
        }

        function deleteWidget(widgetId){
            var widget = widgets.find(function (widget){
                return widget._id === widgetId;
            });
            var index = widgets.indexOf(widget);
            widgets.splice(index, 1);
            return widgets;
        }

        function updateWidget(widgetId, widget){
            for(var w in widgets){
                if(widgets[w]._id == widgetId){
                    widgets[w].widgetType = widget.widgetType;
                    widgets[w].text = widget.text;
                    widgets[w].size = widget.size;
                    return widgets;
                }
            }
        }

        function getWidgetTypeById(widgetId){
            for(var w in widgets){
                if(widgets[w]._id === widgetId){
                    return widgets[w];
                }
            }
        }


        /*this.findPageByWebsiteId = findPageByWebsiteId;
        this.createPage = createPage;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        function deletePage(pageId){
            var page = pages.find(function (page){
                return page._id === pageId;
            });
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }

        function updatePage(pageId, page){
            for(var p in pages){
                if(pages[p]._id == pageId){
                    pages[p].description = page.description;
                    return pages;
                }
            }
        }

        function findPageById(pageId){
            for(var p in pages){
                if(pages[p]._id === pageId){
                    return pages[p];
                }
            }
            return null;
        }

        function createPage(websiteId, page){
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            pages.push(page);

            return pages;
        }

        function findPageByWebsiteId(websiteId) {
            var _pages = [];

            for(var p in pages){
                if(pages[p].websiteId === websiteId){
                    _pages.push(pages[p]);
                }
            }
            return _pages;
        }*/
    }
})();