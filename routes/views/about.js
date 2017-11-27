var keystone = require('keystone');
var Trainer = keystone.list('Trainer');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';
	view.on('init', function (next) {
		Trainer.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.trainers = results;
			next()
		})
	});
	// Render the view
	view.render('about');
};
