#!/bin/bash

set -e

# Testing React Components
mocha src/client/components/__tests__/*.js --compilers js:babel-core/register

# Testing UI JavaScript
tape test/*.js -r babel-core/register