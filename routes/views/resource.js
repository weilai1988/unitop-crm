var keystone = require('keystone');
var Material = keystone.list('Material')
var Experience = keystone.list('Experience')

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'resource';
	view.on('init', function (next) {
		Material.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.materials = results;
			next()
		})
	});

	view.on('init', function (next) {
		Experience.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.experiences = results;
			next()
		})
	});
	// Render the view
	view.render('resource');
};
