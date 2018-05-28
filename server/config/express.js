const path = require('path');
const config = require('./config');
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

module.exports = function(connection) {
    const app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(methodOverride());

    const mongoStore = new MongoStore({
        mongooseConnection: connection
    });

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        store: mongoStore
    }));

    app.use(express.static(path.join(__dirname, '../../dist')));

    // require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/curriculum.server.routes.js')(app);
    require('../app/routes/contact.server.routes.js')(app);
    require('../app/routes/post.server.routes.js')(app);
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });
    
    const port = process.env.PORT || 3000;
    app.set('port', port);
    const server = http.createServer(app);

    server.listen(port, () => console.log('Server running at http://localhost:' + port + '/'));

    return server;
};