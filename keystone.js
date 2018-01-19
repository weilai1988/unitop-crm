// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'UNITOP PTE',
	'brand': 'UNITOP PTE',

	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

	// Web Server Options
	'port': 8080,

	'cloudinary config': { 
		cloud_name: 'tonysickpony', 
		api_key: '145547395321675', 
		api_secret: 'o5iGLSl8EQ3wPuiMOB6wVfv4rns' 
	},

	'cookie secret': 'unitop',
	'mongo': 'mongodb://unitoppte.com.au/unitop-crm',

	'wysiwyg additional options': { 'external_plugins': { 'uploadimage': '/js/uploadimage/plugin.min.js' } },
	// 'wysiwyg additional plugins': 'images',
	// 'wysiwyg images': true,
	'wysiwyg cloudinary images': true


});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	'主页信息': 'newscasts',
	'课程设置': 'courses',
	'资料分享': ['materials', 'experiences'],
	'关于我们': ['trainers'],
	'在线报名': ['enrolments'],
	'管理员功能': 'users',
});

// Start Keystone to connect to your database and initialise the web server
keystone.start();
