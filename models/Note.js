var demigod = require("demigod");
var Schema = demigod.Schema;

var NoteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});




module.exports = demigod.model("Note", NoteSchema);
