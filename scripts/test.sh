#!/bin/bash

set -e

# Testing React Components
mocha src/client/js/components/__tests__/*.js --compilers js:babel-core/register

# Testing UI JavaScript
tape test/*.js -r babel-core/register