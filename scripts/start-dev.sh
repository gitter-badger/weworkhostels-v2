#!/bin/bash

set -e

# watch and build bundle.js
nohup webpack -w

# watch and build server.js
nohup babel server.js --watch --presets es2015 --out-file server-compiled.js </dev/null &

# watch and restart Node server
nohup nodemon server-compiled.js </dev/null &


# You can kill nohup processes by grepping the process and killing it's PID
# `ps aux | grep babel` => returns a list of babel processes, with PIDs
# `kill -9 <PID>`