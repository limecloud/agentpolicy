---
title: 验收场景
description: 兼容 Agent Policy 的实现应通过的场景。
---

# 验收场景

## 工具审批

高风险 shell 命令返回 `ask`；UI 渲染审批；用户 approve once；Runtime 获得 scoped grant；Evidence 能连接 decision、approval、grant、tool call 与 trace。

## Artifact 导出

包含敏感字段的导出返回 `allow`，并带 `redact_before_export` 与 `keep_audit_shape` obligations。Exporter 脱敏 payload，保留 ids 与 hashes。

## 模型路由

敏感任务不能发送到外部模型。Policy 对外部模型返回 `deny`，对本地或私有模型返回带目的约束的 `allow`。

## 远程委托

Peer agent 获得不可转让 grant，并必须返回 policy/evidence/telemetry refs。若无法落实 redaction，则源系统记录 `indeterminate` 或 `defer`。

## Waiver

被阻断的生产动作只有在有权限 reviewer 创建带 expiry 和 review requirement 的 waiver 后才可继续，且 Evidence 保留原始 denial。
