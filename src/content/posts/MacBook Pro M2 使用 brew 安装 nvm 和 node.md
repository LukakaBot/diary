---
title: MacBook Pro M2 安装 nvm
pubDate: 2024-09-05
categories: ['环境']
description: ''
---

小编环境：

- 2023 MacBook Pro M2
- macOS 14.0
- 终端：iTerm

## 安装 nvm

要获取或更新 nvm，手动执行以下命令：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

确定 Mac 使用的是 zsh 还是 bash，如果是 bash 则添加到 `~/.bash_profile`，如果是 zsh 则添加到 `~/.zshrc`：

```bash
echo $SHELL
# 输出 /bin/zsh，为 Zsh，添加到 ~/.zshrc
# 输出 /bin/bash，为 Bash，添加到 ~/.bash_profile
```

尝试将以下命令添加到你的配置文件中（`~/.bash_profile` 或 `~/.zshrc`）：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
```

重新加载配置：

```bash
source ~/.zshrc
# 或
source ~/.bash_profile
```

检查 nvm 是否安装成功：

```bash
nvm --version

# 输出 0.40.1，安装成功🎉
```

## 安装 node

```bash
# 安装 node 22.7.0
nvm install 22.7.0
```

检查 node 是否安装成功：

```bash
node -v

# 输出 v22.7.0，安装成功🎉
```
