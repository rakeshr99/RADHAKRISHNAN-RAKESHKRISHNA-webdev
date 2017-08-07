var mongoose = require("mongoose");
var widgetSchema = require("../widget/widget.schema.server");
var widgetModel = mongoose.model("WidgetModel", widgetSchema);

widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.createWidget = createWidget;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function findAllWidgetsForPage(pageId){
    return widgetModel.find({_page : pageId});
}

function findWidgetById(widgetId){
    return widgetModel.findById({_id : widgetId});
}

function createWidget(pageId, widget){
    widget._page = pageId;
    return widgetModel.create(widget);
}

function updateWidget(widgetId, widget){
    return widgetModel.update({_id : widgetId}, {$set : widget});
}

function deleteWidget(widgetId){
    return widgetModel.remove({_id : widgetId});
}

function reorderWidget(pageId, start, end){
    //yet to implement

}