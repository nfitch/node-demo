#!/usr/bin/env node
// Copyright (c) 2014, Nate Fitch. All rights reserved.

var bunyan = require('bunyan');
var restify = require('restify');
var stats = { 'success': 0, 'total': 0 };

var log = bunyan.createLogger({
    'name': 'demo',
    'streams': [{ level: 'info', path: '/var/tmp/demo.log' }]
});

function respond(req, res, next) {
    log.debug({ 'params': req.params });

    switch (req.params.resource) {
    case 'error': log.error('An error!'); res.send(500); break;
    case 'crash': process.abort();
    default: ++stats.success; res.send(200); break;
    }
    ++stats.total;

    return (next());
}

var server = restify.createServer();
server.get('/:resource', respond);
server.on('after', restify.auditLogger({ log: log }));
server.listen(1919, function() {
    log.info({ 'name': server.name, 'url': server.url },
             'server listening');
});
