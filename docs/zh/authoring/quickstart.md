---
title: 实现快速开始
description: 实现 Agent Policy 的最小路径。
---

# 实现快速开始

## 1. 选择一个高风险动作

从 shell 命令、文件写入、外部模型调用、Artifact 导出、凭证使用或远程 Agent 委托开始。

## 2. 构造 policy input

归一化为 subject、action、resource、context、scope。

## 3. 评估 policy

可使用本地表、配置、托管服务、OPA、Cedar、XACML-like 服务或代码。最终导出 `policy_decision`。

## 4. 执行前 enforcement

- `allow`：落实 obligations 后执行。
- `deny`：停止并记录拒绝。
- `ask`：创建 approval request 并暂停。
- `escalate`：路由到更强权威。
- `defer`：等待缺失事实。
- `indeterminate`：默认失败关闭。

## 5. 记录后续事实

审批产生 `approval_request` 与 `permission_grant`；覆盖产生 `waiver_record`；导出脱敏产生 redaction/retention obligations；所有事实用 `policy_trace` 连接。
