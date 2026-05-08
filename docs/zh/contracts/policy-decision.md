---
title: Policy decision
description: 对候选 Agent 动作的可移植策略评估结果。
---


# Policy Decision

`policy_decision` 是 Agent Policy 的中心对象，回答“这个动作能否继续、在什么约束下继续、为什么”。

## 生产者规则

- 使用稳定 `decision_id` 与时间戳。
- 即使结果是 `deny`，也保留 subject、action、resource、context。
- 必须给出机器可读 `reason_codes`，不能只有自然语言解释。
- 当 `allow`、`ask`、`escalate` 或 `waive` 依赖条件时，写入 `obligations`。
- 用 `refs` 连接 approvals、grants、waivers、runtime events、telemetry 与 evidence。

## 消费者规则

- `deny`、`ask`、`escalate`、`indeterminate` 默认阻断。
- 执行、导出、展示或存储前必须落实 obligations。
- 不要把 `advice` 当成强制控制。
- 任何覆盖都应记录为 `waiver_record`，不要静默改写原 decision。
