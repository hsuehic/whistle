var util = require('../util.test');

module.exports = function() {
  util.request('http://unknownprotocol.w2.org/index.html?doNotParseJson', function(res, data) {
    res.statusCode.should.be.equal(502);
  });
  require('../../biz/webui/cgi-bin/util').formatDate();
  util.request('http://127.0.0.1:6666/_/-/abc.htm', function(res, data) {
    data.url.should.be.equal('/abc.htm');
  });
  util.request('http://test.internal.path.com/...whistle-path.5b6af7b9884e1165...///whistle._abc/index.html', function(res, data) {
    data.url.should.be.equal('/...whistle-path.5b6af7b9884e1165...///whistle._abc/index.html');
  });
};
