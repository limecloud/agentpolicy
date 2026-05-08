---
title: Delegation 与 remote policy
description: 子 Agent、peer agent 与托管 runtime 的策略语义。
---


# Delegation 与 Remote Policy

Agent 系统会把工作委托给子 Agent、托管 Runtime、peer agent 或外部服务。Agent Policy 用统一模型描述这些 handoff 的控制边界。

Delegation policy 应说明 delegator、receiver、允许的 action/resource、grant 是否可转让、哪些数据类别可离开源边界、必须返回哪些 evidence/telemetry/policy refs，以及远端无法执行 obligation 时如何处理。

如果远端系统无法证明落实了 required obligation，源 Runtime 应记录 `defer`、`escalate` 或 `indeterminate`，而不是静默允许。
