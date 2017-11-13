var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Course Model
 * =============
 */

var Course = new keystone.List('Course', {
	nocreate: false,
	noedit: false,
        nodelete: false,
        hidden: false
});

Course.add({
	name: { type: String, required: true },
        description: { type: Types.Html, wysiwyg: true, height: 400 },
        createdAt: { type: Date, default: Date.now }
});

Course.defaultSort = '-createdAt';
Course.defaultColumns = 'name, description, createdAt';
Course.register();
