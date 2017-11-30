var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Experience Model
 * =============
 */

var Experience = new keystone.List('Experience', {
    autokey: { from: '_id', path: 'key', unique: true },
	nocreate: false,
	noedit: false,
    nodelete: false,
    hidden: false
});

Experience.add({
    title: { type: String, required: true, initial: true },
    featuredImage: { type: Types.CloudinaryImage },
    summary: {type: Types.Textarea, },
    content: { type: Types.Html, wysiwyg: true, height: 400 },
    createdAt: { type: Date, default: Date.now }
});

Experience.defaultSort = '-createdAt';
Experience.defaultColumns = 'title, summary, createdAt';
Experience.register();
