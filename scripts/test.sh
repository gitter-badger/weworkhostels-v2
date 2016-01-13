#!/bin/bash

set -e

# Testing React Components
mocha test/components/*.js --compilers js:babel-core/register --opts ./test/components/mocha.opts 

# Testing UI JavaScript
tape test/*.js -r babel-core/register
tape test/unit/*.js -r babel-core/register