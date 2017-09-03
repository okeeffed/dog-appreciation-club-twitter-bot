casper.test.begin('Init test', function suite(test) {
	casper.start("http://localhost:3090/", function() {
		this.echo('CasperJS ready', 'COMMENT');
		test.assertHttpStatus(200);
	});

	casper.run(function() {
		test.done();
	});
});
