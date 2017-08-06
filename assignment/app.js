var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/assignmentDB");
mongoose.Promise = require('q').Promise;

require("./user.service.server");
require("./website.service.server");
require("./page.service.server");
require("./widget.service.server");