express-views-static
==========================

Static file view engine for [Express](http://expressjs.com/).

[![NPM version](https://badge.fury.io/js/express-views-static.png)](http://badge.fury.io/js/express-views-static)

## Installation

via npm:

```bash
$ npm install --save express-views-static
```

## Use

Add to your Express app as an engine for your file extension - e.g. for HTML:

```javascript
var app = express();

app.engine('html', require('express-views-static'));
```

