#!/usr/bin/env bash

sudo podman run \
  -e MYSQL_ROOT_PASSWORD="ohgodwhy" \
  -e MYSQL_USER="service" \
  -e MYSQL_PASSWORD="deargodwhy" \
  -e MYSQL_DATABASE="user_manager" \
  -p 3306:33060 \
  --name mysql \
  -d \
  mysql:latest
