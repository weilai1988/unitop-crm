var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Course Model
 * =============
 */

var Trainer = new keystone.List('Trainer', {
        autokey: { from: '_id', path: 'key', unique: true },
	nocreate: false,
	noedit: false,
        nodelete: false,
        hidden: false
});

Trainer.add({
	name: { type: Types.Name, required: true },
        avatar: { type: Types.CloudinaryImage },
        description: { type: Types.Html, wysiwyg: true, height: 400 },
        createdAt: { type: Date, default: Date.now }
});

Trainer.defaultSort = '-createdAt';
Trainer.defaultColumns = 'name, avatar, description, createdAt';
Trainer.register();
