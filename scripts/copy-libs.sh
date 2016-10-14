#!/bin/bash

mkdir -p dist/libs
cp node_modules/core-js/client/shim.min.js dist/libs/shim.min.js
cp node_modules/zone.js/dist/zone.min.js dist/libs/zone.min.js
cp node_modules/reflect-metadata/Reflect.js dist/libs/Reflect.js
