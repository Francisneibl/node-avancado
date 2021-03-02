#!/bin/bash

ssh-keygen -t rsa -b 2048 -m PEM -f ./src/keys/private.key
openssl rsa -in ./src/keys/private.key -pubout -outform PEM -out ./src/keys/public.key