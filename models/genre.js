var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema({
    name: {type: String, min: 3, max: 100}
});

genreSchema
.virtual('url')
.get(function() {
    return '/catalog/genre' + this.id;
})

module.exports = mongoose.model('genre', genreSchema);