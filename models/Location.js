var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Location Model
 * ==========
 */

var Location = new keystone.List('Location');

Location.add({
	latitude: { type: Types.Number, required: true, index: true, initial:'0' },
	longitude: { type: Types.Number, required: true, index: true, initial:'0' },
	date: { type: Types.Datetime, required: true, initial:'1/1/2015'},
	speed: { type: Types.Number},
	altitude: { type: Types.Number},
	animal: { type: Types.Relationship, ref: 'Animal'},
});



/**
 * Registration
 */

Location.defaultColumns = 'latitude, longitude, date';
Location.register();
