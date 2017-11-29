var keystone = require('keystone');
var Course = keystone.list('Course');
var Newscast = keystone.list('Newscast');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('init', function (next) {
		Course.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.courses = results;
			next();
		})
	});


	view.on('init', function (next) {
		Newscast.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.newscasts = results;
			next();
		})
	});

	// Render the view
	view.render('index');
};
