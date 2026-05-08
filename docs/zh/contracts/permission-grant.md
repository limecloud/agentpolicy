---
title: Permission grant
description: 发给 Agent、Runtime、工具或委托 actor 的有界权限。
---


# Permission Grant

`permission_grant` 记录有边界的权限。它可以来自策略引擎、人类审批、委托权威、会话初始化、身份 token 或管理员规则。

Grant SHOULD 包含 action、resource、parameter restrictions、trust boundary、session/thread/task/run scope、成本/次数/数据量上限、sandbox profile、redaction/retention obligations、expiry 与 revocation。

撤销 grant 时保留 `grant_id`、`issued_at`、`revoked_at`、`revoked_by` 与 `revocation_reason`，这样后续 trace 能解释为什么动作被阻断。
