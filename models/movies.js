var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
    id: Number,
    genres: Array,
    poster_path: String,
    release_date: Date,
    overview: String,
    popularity: Number,
    title: String,
    vote_average: Number,
    vote_count: Number,
    mood: String,
    avec_qui: String,
});


module.exports = mongoose.model('movies', moviesSchema);