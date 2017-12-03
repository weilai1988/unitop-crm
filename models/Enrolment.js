var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Enrolment Model
 * =============
 */

var Enrolment = new keystone.List('Enrolment', {
	nocreate: true,
	noedit: true,
	label: '在线报名'
});

Enrolment.add({
	name: { type: String, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	recentTest: { type: Types.Boolean },
	recentTestType: { type: String },
	recentTestResult: { 
		listening: { type: String },
		speaking: { type: String },
		reading: { type: String },
		writing: { type: String },
	},
	goal: { type: String },
	addtionalInformation: { type: String },
	createdAt: { type: Date, default: Date.now },
});

Enrolment.defaultSort = '-createdAt';
Enrolment.defaultColumns = 'name, email, phone, createdAt';
Enrolment.register();
