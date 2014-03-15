## Why node.js for Manta
### Nate Fitch

---
## Intro

1. Software Engineer at Joyent
1. Came to Joyent to work on Manta
    1. manta-compute-bin
    1. Object Garbage Collection
    1. Object Audit

---
## Manta Architecture in Brief

<!-- Pic goes here -->

---
## Where we use Node: Servers

<!-- Pic goes here -->

---
## Where we use Node: Proxies

<!-- Pic goes here -->

---
## Where we use Node: Crons/CLIs

<!-- Pic goes here -->

---
## Where we use Node: Everywhere

<!-- Pic goes here -->

<!-- TODO: Marlin Dashboard and Madtom? -->
---
## Techniques

1. restify
1. bunyan
1. json
1. mdb

---
## restify

- Node framework for building RESTful APIs
- https://github.com/mcavage/node-restify
- https://www.npmjs.org/package/restify

---
## bunyan
- One-stop shop for emitting and processing JSON logs
- https://github.com/trentm/node-bunyan
- https://www.npmjs.org/package/bunyan
- Logger in node.js application
- Tool for processing bunyan logs
- Realtime log levels and filtering with `-p`

---
## json
- Tool for all your json needs
- https://github.com/trentm/json
- https://www.npmjs.org/package/jsontool

---
## MDB (Modular Debugger)
- `--abort-on-uncaught-exception`
- Take cores from running processes
- Common commands:
    - `::jsstack`
    - `::jsframe`
    - `::jsprint`
    - `::findjsobjects` (`-p` and `-r`)
- thoth

---
## Demo

---
## Engaging with node-core
- As open as possible (via gihub issues)
- Provide a clear description
- Provide a repro *in node*
- Examples:
    - https://github.com/joyent/node/issues/4692
    - https://github.com/joyent/node/issues/6297

---
## Links
- lots o' links

---
## Go here
- http://github.com/nfitch/node-demo
