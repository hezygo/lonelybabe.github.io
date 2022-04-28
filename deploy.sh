#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

if [ $# -eq 1 ]; then
    msg=${1}
else
    msg="default msg"
fi
echo "\033[0;32m[*]\033[0m msg here:-> \033[0;32m${msg}\033[0m"
distPath="./public"
if [ -d "$distPath" ]; then
    rm -rf  $distPath
    echo "\033[0;32m[*]\033[0m ${distPath} had \033[0;32mdeleted\033[0m"
fi

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

echo 'www.alonelyman.cn' > CNAME
git init
git add -A
git commit -m "${msg}"

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hezygo/lonelybabe.github.io.git master:main

cd -

git add .
git commit -m "${msg}"
git push orgin

echo "\033[0;32m[+]\033[0m This commit with msg like -> \033[0;32m${msg}\033[0m"
