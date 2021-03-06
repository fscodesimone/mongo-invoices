var DB = require('./server/modules/db-manager');


module.exports = function(app, exp) {
	app.configure(function(){
		app.use(DB.i18n.init);
		app.set('views', app.root + '/app/server/views');
		app.set('view engine', 'jade');
		app.set('view options', { doctype : 'html', pretty : true });
		app.use(exp.bodyParser());
		app.use(exp.cookieParser());
		app.use(exp.session({ secret: 'super-duper-secret-secret' }));
		app.use(exp.methodOverride());
		app.use(require('stylus').middleware({ src: app.root + '/app/public' }));
		app.use(exp.static(app.root + '/app/common'));
		app.use(exp.static(app.root + '/app/public'));
		app.use(exp.static(app.root + '/customize'));
	});
}