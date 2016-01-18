#!/bin/bash

set -e

# Webpack watch to build bundle.js
sleep 1
osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' -e 'tell application "Terminal" to do script "webpack -w" in selected tab of the front window'

# Babel watch to build server-compiled.js
sleep 1
osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' -e 'tell application "Terminal" to do script "babel --watch server.js --presets es2015 --out-file server-compiled.js" in selected tab of the front window'

# nodemon to watch server-compiled.js for changes & restart Node server
sleep 5
osascript -e 'tell application "Terminal" to activate' -e 'tell application "System Events" to tell process "Terminal" to keystroke "t" using command down' -e 'tell application "Terminal" to do script "nodemon server-compiled.js" in selected tab of the front window'