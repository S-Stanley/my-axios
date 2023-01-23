#!/bin/bash

tsc
docker-compose up --build -d
node dist/test/get.test.js

exit_code=$?
docker-compose down
exit $exit_code