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
        hidden: false,
        label: 'PTE教师'
});

Trainer.add({
	name: { type: String, required: true },
        avatar: { type: Types.CloudinaryImage },
        summary: {type: Types.Textarea },
        description: { type: Types.Html, wysiwyg: true, height: 400 },
        createdAt: { type: Date, default: Date.now }
});

Trainer.defaultSort = '-createdAt';
Trainer.defaultColumns = 'name, avatar, summary, createdAt';
Trainer.register();
