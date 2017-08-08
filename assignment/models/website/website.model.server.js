var mongoose = require("mongoose");
var websiteSchema = require("../website/website.schema.server");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
//var userModel = require("user.model.server)

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
    //var webTmp = null
    return websiteModel.create(website);
/*            .then(function (websiteDoc){
                websitetmp = webisteDoc
                return userModel.addWebsite(developerId, websiteDoc._id)
    })
    .then(function (userDoc){
        return webtmp;
    */
}

function updateWebsite(websiteId, website){
    return websiteModel.update({_id : websiteId}, {$set : website});
}

function deleteWebsite(websiteId){
    return websiteModel.remove({_id : websiteId});
    //webisteModel.
    //    removeWebsite(developerId, websiteId)
    //then(function (status){
    //userModel.removeWebsite(developerId, websiteId)
}