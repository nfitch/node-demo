#!/usr/bin/env node
// Copyright (c) 2014, Nate Fitch. All rights reserved.

var bunyan = require('bunyan');
var restify = require('restify');
var stats = { 'success': 0, 'total': 0 };

var log = bunyan.createLogger({
    'name': 'demo'
});

function shutdown() {
    server.conns.forEach(function (s) {
        s.destroy();
    });
    server.close();
    log.info(stats, 'server shutting down');
}

function respond(req, res, next) {
    log.debug({ 'params': req.params });

    switch (req.params.resource) {
    case 'error': log.error('An error!'); res.send(500); break;
    case 'crash': process.abort();
    case 'shutdown': shutdown();
    default: ++stats.success; res.send(200); break;
    }
    ++stats.total;

    return (next());
}

var server = restify.createServer();
server.conns = [];
server.get('/:resource', respond);
server.on('after', restify.auditLogger({ log: log }));
server.on('connection', function (socket) {
    server.conns.push(socket);
    //Remove this socket.on to demonstrate a resource leak
    socket.on('close', function () {
        var i = server.conns.indexOf(socket);
        if (i !== -1) {
            server.conns.splice(i, 1);
        }
    });
});
server.listen(1919, function() {
    log.info({ 'name': server.name, 'url': server.url },
             'server listening');
});
