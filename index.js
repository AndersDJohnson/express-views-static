var fs = require('fs');

module.exports = function (file, options, next) {
  fs.readFile(file, function (err, data) {
    if (err) {
      next(err);
    } else {
      next(null, data.toString());
    }
  });
};
