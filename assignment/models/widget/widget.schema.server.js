var mongoose = require("mongoose");

var widgetSchema = mongoose.Schema({
    _page : {type : mongoose.Schema.ObjectId, ref : "PageModel"},
    type : {type : String,
            enum : ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT']},
    name : String,
    text : String,
    placeholder : String,
    description : String,
    url : String,
    width : String,
    height : String,
    rows : String,
    size :String,
    class : String,
    icon :String,
    deletable :String,
    formatted : String,
    dateCreated : {type : Date, default : Date.now}
}, {collection : "widget"});

module.exports = widgetSchema;