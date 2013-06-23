log(typeof Tombfix);
log(typeof Tombloo);
log(typeof Tombfix.Service);
log(typeof Tombloo.Service);
log(typeof Tombfix.Service.extractors);
log(typeof Tombloo.Service.extractors);
log(typeof models);
log(typeof Tumblr);

Tombloo.Service.extractors.register({
	name : 'Tombloo Path Test',
	ICON : 'chrome://tombloo/skin/photo.png',
	check : function check(ctx) {
		return true;
	},
	extract : function extract(ctx) {
		addTab('chrome://tombloo/content/browser.xul');
		return {};
	}
});