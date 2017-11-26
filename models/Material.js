var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Material Model
 * =============
 */

var Material = new keystone.List('Material', {
    autokey: { from: '_id', path: 'key', unique: true },
    nocreate: false,
    noedit: false,
    nodelete: false,
    hidden: false
});

Material.add({
    title: { type: String },
    featuredImage: { type: Types.CloudinaryImage },
    description: { type: Types.Html, wysiwyg: true, height: 400 },
    createdAt: { type: Date, default: Date.now }
});

Material.defaultSort = '-createdAt';
Material.defaultColumns = 'title, description, createdAt';
Material.register();
