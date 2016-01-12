#!/bin/bash

set -e

babel src --presets es2015 --out-dir ./ci-test/src

babel test --presets es2015 --out-dir ./ci-test/test

istanbul cover ./node_modules/.bin/tape ./ci-test/test/*.js && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
