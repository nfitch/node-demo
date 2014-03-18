node-demo
=========

# Demo Instructions

## Setup

```
$ npm install
```

## Start the server
```
$ ./server.js --abort-on-uncaught-exception
```

## Start some clients

Preferably from a couple machines:
```
$ while [[ true ]]; do curl http://[ip]:1919/r; sleep 1; done
```

## Tail the logs

```
$ tail -f /var/tmp/demo.log
```

## Let's look at just one bunyan log
```
$ tail -1 /var/tmp/demo.log | json
```

## Tail the logs with Bunyan to get pretty output
```
$ tail -f /var/tmp/demo.log | bunyan
```

## Get debug logs with bunyan -p
```
$ sudo bunyan -p '*' -l debug
```

## Filter out just the params with bunyan -p
```
$ sudo bunyan -p '*' -l debug -c 'this.params !== undefined'
```

## Filter to requests coming from localhost
```
$ sudo bunyan -p '*' -l debug -c 'this.remoteAddress === "127.0.0.1"'
```

## Get only error logs with bunyan -p and cause error
```
$ sudo bunyan -p '*' -l error
$ curl http://localhost:1919/error
```

## Find where requests are coming from
```
$ json -ga -f /var/tmp/demo.log -C "this._audit === true" remoteAddress | sort | uniq -c
```

## Crash the server

```
$ curl http://localhost:1919/crash
```

## Find the params for the request that crashed the server
```
$ mdb core
> ::load v8
> ::jsstack -v
#After finding the arg1
> b4717cf5::jsprint params
```

## Find the count
```
> ::findjsobjects -p total | ::findjsobjects | ::jsprint
```

Note that some garbage objects may turn up.  Should be recognizable.

# Generating the presentation

The presentation is generated via
(mdpress)[https://github.com/egonSchiele/mdpress].  So:

```
sudo gem install mdpress
```

Then:

```
mdpress ./pres/pres.md
```
