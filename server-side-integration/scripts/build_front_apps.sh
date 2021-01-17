#!/bin/bash

set -o errexit

# build calculator-app
cd ./calculator-app

npm run build

cp -r build/ ../nginx-server/html/calculator



# build todo-app
cd ../todo-app

npm run build

cp -r build/ ../nginx-server/html/todo
