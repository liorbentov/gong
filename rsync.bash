#! /bin/bash

rsync -arzv --exclude-from=.rsyncignore . "$(cat .rsynctarget)"

