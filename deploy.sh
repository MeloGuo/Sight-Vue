#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs-build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git config --local user.name "MeloGuo"
git config --local user.email "guoziliang199606@gmail.com"

# 如果发布到
# git push -f git@github.com:MeloGuo/Sight-Vue.git master:gh-pages

# 如果使用 travis 持续集成
git push -f https://${access_token}@github.com/<USERNAME>/<REPO>.git master:gh-pages

cd -
