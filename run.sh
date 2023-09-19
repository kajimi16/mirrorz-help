
git submodule init

git submodule update

rsync -rv overwrite/ . --mkpath

cd mirrorz-help && npm install
# 或 npm clean-install

npm run dev

# 生成静态网页
# npm run og:build && npm run build && npm run export
