

set -e
cd /Users/despiegk/codewww/github/threefoldtech/www_threefold_tech

#need to ignore errors for getting nvm not sure why
set +e
source /Users/despiegk/.publisher/nvm.sh

set -e
nvm use --lts

export PATH=/Users/despiegk/.publisher/versions/node/v15.8.0/bin:$PATH

set +e
gridsome build

set -e

mkdir -p /Users/despiegk/.publisher/publish/www_threefold_tech
rsync -ra --delete /Users/despiegk/codewww/github/threefoldtech/www_threefold_tech/dist/ /Users/despiegk/.publisher/publish/www_threefold_tech/

cd /Users/despiegk/codewww/github/threefoldtech/www_threefold_tech/dist

echo go to http://localhost:9999/
 python3 -m http.server 9999

