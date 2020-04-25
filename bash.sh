#!/bin/sh
cd /usr/share/nginx/html
node run.js
envsubst '' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
