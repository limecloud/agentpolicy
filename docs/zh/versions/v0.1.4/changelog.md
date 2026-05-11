---
title: v0.1.4 变更记录
description: Agent Policy v0.1.4 变更记录。
---

# v0.1.4 变更记录

## Added

- 新增英文与简体中文 Agent Runtime profile 测试用例，覆盖 runtime ids、risk scopes、decisions、ask/deny/allow mapping、grants、waivers、delegated approvals、redaction 与 policy traces。

## Changed

- 将互操作指南对齐 Agent Runtime `permission.*`、`action.*`、`sandbox.*`、`tool.*`、evidence 与 UI refs。
- 扩展 Agent Policy event schema，加入可选 runtime correlation 字段，如 `runtime_id`、`session_id`、`thread_id`、`turn_id`、`task_id`、`run_id`、`attempt_id`、`step_id`、`tool_call_id`、`action_id`、`evidence_id`、`context_id` 与 `artifact_id`。
