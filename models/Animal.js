var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Animal Model
 * ==========
 */

var Animal = new keystone.List('Animal');

Animal.add({
	name: { type: String, required: true },
	animalType: { type: String},
});



/**
 * Registration
 */

Animal.defaultColumns = 'latitude, longitude, date';
Animal.register();
/**
 * Created by manny on 11/14/15.
 */
