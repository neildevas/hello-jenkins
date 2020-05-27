#!/bin/sh
ssh devas@161.35.134.233 <<EOF
 cd ~/hello-jenkins
 ls
echo 'pulling files now'
git fetch origin
git reset --hard origin/master
 git pull
 npm install — production
 pm2 restart all
 exit
EOF
