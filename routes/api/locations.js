/**
 * Created by manny on 11/14/15.
 */
var async = require('async'),
	keystone = require('keystone'),

	exports = module.exports = function(req, res) {
		keystone.list('Location').model.find().exec(function(err,results){
			if (err) return res.status(500).json({ success: false, err: err });
			return res.json({success:true, data:results});
		})
	};
