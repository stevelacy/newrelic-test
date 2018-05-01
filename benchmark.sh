#!/bin/bash

ab -p ./test_data.json -T application/json -c 100 -n 5000 http://localhost:4949/items
