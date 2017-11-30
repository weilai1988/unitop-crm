var keystone = require('keystone');
var Trainer = keystone.list('Trainer');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'about';
	locals.filters = {
		trainer: req.params.trainer,
	};

	view.on('init', function (next) {
		Trainer.model.findOne({
            key: locals.filters.trainer,
        }).exec(function (err, result) {
			locals.trainer = result;
			next(err);
		})
	});

	// Render the view
	view.render('trainer');
};
