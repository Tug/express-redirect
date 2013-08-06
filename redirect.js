
module.exports = function() {
	var args = arguments;
	return function(req, res, next) {
		res.redirect.apply(res, args);
	};
};
