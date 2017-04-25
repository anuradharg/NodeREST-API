const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create GeoLocation Schema (refer http://geojson.org)
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
})


//Create Ninja schema and model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
});


//Assign the model name in the db and the schema to be observed.
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;
