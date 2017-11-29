var keystone = require('keystone');
var Course = keystone.list('Experience');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'resource';
	locals.filters = {
		experience: req.params.experience,
	};

	view.on('init', function (next) {
		Course.model.findOne({
            key: locals.filters.experience,
        }).exec(function (err, result) {
			locals.experience = result;
			next(err);
		})
	});

	// Render the view
	view.render('experience');
};
