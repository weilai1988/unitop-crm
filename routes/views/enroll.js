var keystone = require('keystone');
var Enrolment = keystone.list('Enrolment');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'enroll';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
	

		// On POST requests, add the Enquiry item to the database
	view.on('post', { action: 'enroll' }, function (next) {
			var newEnrollment = new Enrolment.model();
			var updater = newEnrollment.getUpdateHandler(req);
	
			updater.process(req.body, {
				flashErrors: true,
				fields: [
					'name', 
					'email', 
					'phone', 
					'recentTest', 
					'recentTestType', 
					'recentTestResult.listening',
					'recentTestResult.speaking',
					'recentTestResult.reading',
					'recentTestResult.writing',
					'goal',
					'addtionalInformation'
				],
				errorMessage: 'There was a problem submitting your enquiry:',
			}, function (err) {
				if (err) {
					console.log(err)
					locals.validationErrors = err.errors;
				} else {
					locals.enrolmentSubmitted = true;
				}
				next();
			});
		});


	// Render the view
	view.render('enroll');
};
