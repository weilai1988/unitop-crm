var keystone = require('keystone');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'courses';
	locals.filters = {
		course: req.params.course,
	};

	view.on('init', function (next) {
		Course.model.findOne({
            key: locals.filters.course,
        }).exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.course = result;
			next()
		})
	});

	// Render the view
	view.render('course');
};
