#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Transpile ES6 source code
babel src --presets es2015 --out-dir ./ci-test/src

# Transpile ES6 unit tests
babel test/unit --presets es2015 --out-dir ./ci-test/test/unit

# Computes statement, line, function and branch coverage with Istanbul.
# Then pipe the results to Coveralls.
istanbul cover ./node_modules/.bin/tape ./ci-test/test/unit/*.js && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
