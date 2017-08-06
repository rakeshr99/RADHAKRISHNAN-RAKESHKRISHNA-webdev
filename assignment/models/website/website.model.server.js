var mongoose = require("mongoose");
var websiteSchema = require("../website/website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);

websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function findAllWebsitesForUser(userId){
    return websiteModel.find({_user : userId});
}

function findWebsiteById(websiteId){
    return websiteModel.findById({_id : websiteId});
}

function createWebsiteForUser(userId, website){
    website._user = userId;
    return websiteModel.create(website);
}

function updateWebsite(websiteId, website){
    return websiteModel.update({_id : websiteId}, {$set : website});
}

function deleteWebsite(websiteId){
    return websiteModel.remove({_id : websiteId});
}