#!/bin/sh
ssh devas@161.35.134.233 <<EOF
 cd ~/node-app
 git pull
 npm install — production
 pm2 restart all
 exit
EOF
