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
    name: { type: String, required: true },
    description: { type: Types.Html, wysiwyg: true, height: 400 },
    createdAt: { type: Date, default: Date.now }
});

Newscast.defaultSort = '-createdAt';
Newscast.defaultColumns = 'name, description, createdAt';
Newscast.register();
