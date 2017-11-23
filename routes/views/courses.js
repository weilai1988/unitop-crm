var keystone = require('keystone');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'courses';

	view.on('init', function (next) {
		Course.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.courses = results;
			next()
		})
	});

	// Render the view
	view.render('courses');
};
