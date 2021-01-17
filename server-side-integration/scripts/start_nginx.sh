#!/bin/bash

set -o errexit

# start nginx server
cd ./nginx-server

docker-compose up -d
