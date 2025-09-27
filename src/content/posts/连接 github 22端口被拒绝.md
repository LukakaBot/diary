---
title: GitHub SSH连接问题排查
pubDate: 2025-09-27
categories: ['环境']
description: 记录一次GitHub SSH连接失败的完整排查过程，包含DNS解析、hosts文件修改等解决方案。
---

# GitHub SSH连接22端口被拒绝的完整解决方案

## 问题现象

今天在尝试推送代码到GitHub时遇到了这么一个错误：

```cmd
ssh: connect to host github.com port 22: Connection refused
fatal: Could not read from remote repository.
```

之前也有碰到过这个问题，但是之前重启下机器切换下网络什么的就好了，这次不知道怎么回事之前的办法试了个遍都还是解决不了。

## 排查流程

### 基础网络诊断

首先执行`ping`命令，测试基本连通性：

```cmd
正在 Ping github.com [127.0.0.1] 具有 32 字节的数据:
来自 127.0.0.1 的回复: 字节=32 时间<1ms TTL=128
```

发现解析到了本地回环地址 Σ(;ﾟдﾟ)，接着我又试了下 `ssh -v` 命令：

```cmd
OpenSSH_for_Windows_9.5p1, LibreSSL 3.8.2
debug1: Connecting to github.com [127.0.0.1] port 22.
debug1: connect to address 127.0.0.1 port 22: Connection refused
ssh: connect to host github.com port 22: Connection refused
```

发现也是不通，那么这次的问题就极有可能是DNS解析的问题🤔。于是我就去检查了下 `hosts` 文件，发现里面没有配置 `github.com` 的解析，我就去在线DNS工具查询正确IP并修改了`hosts`文件，在其中添加了如下配置：

```
20.205.243.166 github.com
```

修改完 `hosts` 文件后，我就再次执行 `ssh -v` 命令验证下。发现这次是可以连接上的。

```cmd
OpenSSH_for_Windows_9.5p1, LibreSSL 3.8.2
debug1: Connecting to github.com [20.205.243.166] port 22.
debug1: Connection established.
...
```

`ping github.com` 也能正常返回解析结果。

```cmd
正在 Ping github.com [20.205.243.166] 具有 32 字节的数据:
来自 20.205.243.166 的回复: 字节=32 时间=72ms TTL=112
```

最后尝试 `git pull` 命令，发现也能正常拉取代码。

至此，大功告成 🎉(ﾉ>ω<)ﾉ🎉

## 总结

1. 基础连通性测试（ping）
2. 详细错误获取（ssh -v）
3. DNS解析验证
4. 系统配置修正（hosts文件）
5. 备用方案准备（如使用https）
