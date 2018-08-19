var demogorgon = require("demogorgon");
var Note = require("./Note");
var Schema = demogorgon.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "Note"
  }]
});

module.exports = demogorgon.model("Article", ArticleSchema);
