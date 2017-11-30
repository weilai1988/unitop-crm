var keystone = require('keystone');
var Newscast = keystone.list('Newscast');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'home';
	locals.filters = {
		newscast: req.params.newscast,
	};

	view.on('init', function (next) {
		Newscast.model.findOne({
            key: locals.filters.newscast,
        }).exec(function (err, result) {
			locals.newscast = result;
			next(err);
		})
	});

	// Render the view
	view.render('newscast');
};
