---
title: 实现分析摘要
description: 从 policy engines、authorization standards 与 agent runtime patterns 蒸馏出的分析。
---

# 实现分析摘要

Agent Policy 出现的原因，是 Agent 产品把很多过去分散的 policy concern 叠在了一起。

## 既有标准已经解决的部分

Policy engine 证明了规则评估应与 enforcement 解耦，且 decision 可以是结构化数据。Authorization language 证明 subject、action、resource、context 是稳定轴。Access-control 标准证明 permit、deny、not-applicable、indeterminate 这类结果词汇有价值。Identity protocol 证明 grant 和 scope 很重要，但它们不足以描述一个具体 Agent 动作是否安全。Event 与 telemetry 标准证明 policy facts 应与 runtime traces 关联，但不应变成 trace backend。

## Agent 系统新增的压力

Agent 系统加入 loop、tools、models、artifacts、memory、knowledge retrieval、delegation 与 human approval。一个 policy decision 可能需要暂停 turn、创建 approval request、限制工具参数、选择模型、脱敏导出、记录 waiver，或要求 remote agent 返回 evidence refs。

## 设计结论

1. 使用 PARC-like 输入模型，便于映射到既有引擎。
2. 把 `ask`、`defer`、`escalate` 作为一等结果，因为 Agent 经常暂停，而不是简单 allow/deny。
3. 分离 approval request 与 permission grant；prompt 不是 durable capability。
4. 分离 waiver 与 decision；覆盖不能擦除原始阻断。
5. 把 redaction 与 retention 放入 obligations，让 exporter、UI、memory、evidence 执行同一规则。
6. Trace 保持 compact，私有 payload 留在拥有系统中。
7. `indeterminate` 默认 fail closed，因为 Agent 经常跨不完整上下文工作。
