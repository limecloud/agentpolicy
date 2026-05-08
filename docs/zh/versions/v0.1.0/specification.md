---
title: v0.1.0 规范
description: Agent Policy v0.1.0 版本化规范。
---

# v0.1.0 规范

此页快照 v0.1.0 契约。当前草案见[最新规范](../../specification)。

## 核心 result vocabulary

`allow`、`deny`、`ask`、`defer`、`escalate`、`waive`、`not_applicable`、`indeterminate`。

## 核心对象

`policy_decision`、`risk_scope`、`approval_request`、`permission_grant`、`redaction_policy`、`retention_policy`、`waiver_record`、`policy_trace` 与 policy event envelopes。

## Compatibility

- Producers should include `schema_version: "0.1.0"`。
- Consumers should ignore unknown fields。
- Decisions should preserve subject、action、resource、context、result、reason codes、obligations 与 refs。
