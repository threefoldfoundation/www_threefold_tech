

set -e
cd /Users/sacha/codewww/github/threefoldtech/www_threefold_tech

#need to ignore errors for getting nvm not sure why
set +e
source /Users/sacha/.publisher/nvm.sh

set -e
nvm use --lts

export PATH=/Users/sacha/.publisher/versions/node/v15.8.0/bin:$PATH

set +e
gridsome build

set -e

mkdir -p /Users/sacha/.publisher/publish/www_threefold_tech
rsync -ra --delete /Users/sacha/codewww/github/threefoldtech/www_threefold_tech/dist/ /Users/sacha/.publisher/publish/www_threefold_tech/

cd /Users/sacha/codewww/github/threefoldtech/www_threefold_tech/dist

#echo go to http://localhost:9999/
 #python3 -m http.server 9999

