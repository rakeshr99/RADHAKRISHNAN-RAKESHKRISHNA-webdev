var mongoose = require("mongoose");
var pageSchema = require("../page/page.schema.server");
var pageModel = mongoose.model("PageModel", pageSchema);

pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.createPage = createPage;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;

function findAllPagesForWebsite(websiteId){
    return pageModel.find({_website : websiteId});
}

function findPageById(pageId){
    return pageModel.findById({_id : pageId});
}

function createPage(websiteId, page){
    page._website = websiteId;
    return pageModel.create(page);
}

function updatePage(pageId, page){
    return pageModel.update({_id : pageId}, {$set : page});
}

function deletePage(pageId){
    return pageModel.remove({_id : pageId});
}
