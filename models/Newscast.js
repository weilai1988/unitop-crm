var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Course Model
 * =============
 */

var Newscast = new keystone.List('Newscast', {
    autokey: { from: '_id', path: 'key', unique: true },
    nocreate: false,
    noedit: false,
    nodelete: false,
    hidden: false
});

Newscast.add({
    title: { type: String, required: true, initial: true},
    summary: {type: Types.Textarea },
    content: { type: Types.Html, wysiwyg: true, height: 400 },
    createdAt: { type: Date, default: Date.now }
});

Newscast.defaultSort = '-createdAt';
Newscast.defaultColumns = 'title, description, createdAt';
Newscast.register();
