#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

msg=${1}
if [ $# -eq 1 ]; then
    msg="default init"
fi


# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

echo 'www.alonelyman.cn' > CNAME
git init
git add -A
git commit -m $msg

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hezygo/lonelybabe.github.io.git master:main

cd -

git add .
git commit -m $msg
git push git@github.com:hezygo/lonelybabe.github.io.git master:gh-pages

echo "[+]This commit with msg like -> ${msg}"