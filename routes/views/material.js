var keystone = require('keystone');
var Course = keystone.list('Material');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'material';
	locals.filters = {
		material: req.params.material,
	};

	view.on('init', function (next) {
		Course.model.findOne({
            key: locals.filters.material,
        }).exec(function (err, result) {
			locals.material = result;
			next(err);
		})
	});

	// Render the view
	view.render('material');
};
