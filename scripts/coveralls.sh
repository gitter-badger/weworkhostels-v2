#!/bin/bash

set -e

babel src --presets es2015 --out-dir ./ci-test/src

babel test/unit --presets es2015 --out-dir ./ci-test/test/unit

istanbul cover ./node_modules/.bin/tape ./ci-test/test/unit/*.js && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
