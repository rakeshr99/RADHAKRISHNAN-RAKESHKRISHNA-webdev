var app = require("../express");

var pages = [
    {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
    {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
    {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
];

app.get("/api/user/:userId/website/:websiteId/page",findPageByWebsiteId);
app.post("/api/user/:userId/website/:websiteId/page",createPage);
app.get("/api/user/:userId/website/:websiteId/page/:pageId", findPageById);
app.delete("/api/user/:userId/website/:websiteId/page/:pageId", deletePage);
app.put("/api/user/:userId/website/:websiteId/page/:pageId", updatePage);

function deletePage(req, res){
    var pageId = req.params.pageId;

    var page = pages.find(function (page){
        return page._id === pageId;
    });
    var index = pages.indexOf(page);
    pages.splice(index, 1);
    res.send("true");
    return;
}

function updatePage(req, res){
    var pageId = req.params.pageId;
    var page = req.body;
    for(var p in pages){
        if(pages[p]._id == pageId){
            pages[p].description = page.description;
            res.send(pages);
            return;
        }
    }
}

function findPageById(req, res){
    var pageId = req.params.pageId;
    for(var p in pages){
        if(pages[p]._id === pageId){
            res.send(pages[p]);
        }
    }
}

function createPage(req, res){
    var websiteId = req.params.websiteId;
    var page = req.body;
    page._id = (new Date()).getTime() + "";
    page.websiteId = websiteId;
    pages.push(page);
    res.send(pages);
}

function findPageByWebsiteId(req, res){
    var websiteId = req.params.websiteId;

    var _pages = [];

    for(var p in pages){
        if(pages[p].websiteId === websiteId){
            _pages.push(pages[p]);
        }
    }
    res.send(_pages);
}

