---
title: Agent 标准生态
description: Agent Knowledge、Agent UI、Agent Runtime、Agent Evidence 与 Agent Policy 的相互链接。
---

# Agent 标准生态

Agent 标准生态把 Agent 产品拆成可移植契约。每个标准只拥有一层语义，并通过稳定 refs 连接其他标准，避免吞掉整个 stack。

本页是当前标准的公开友情链接图谱，用于发现相邻协议，并判断一个新概念应归属哪个标准。

## Agent Policy 的位置

Agent Policy 拥有决策事实：risk scopes、approvals、permissions、grants、denials、obligations、waivers、redaction、retention 与 policy traces。

Policy 说明一个 Agent 动作是否可以继续、在什么约束下继续、谁接受或拒绝了风险。

## 当前标准

| Standard | Role | Site | LLM context | Repository |
| --- | --- | --- | --- | --- |
| Agent Knowledge | 面向 Agent 的 source-grounded knowledge packs。 | [site](https://limecloud.github.io/agentknowledge/) | [llms-full](https://limecloud.github.io/agentknowledge/llms-full.txt) | [repo](https://github.com/limecloud/agentknowledge) |
| Agent UI | Agent 产品的交互表面。 | [site](https://limecloud.github.io/agentui/) | [llms-full](https://limecloud.github.io/agentui/llms-full.txt) | [repo](https://github.com/limecloud/agentui) |
| Agent Runtime | 执行事实、控制、任务、工具与恢复。 | [site](https://limecloud.github.io/agentruntime/) | [llms-full](https://limecloud.github.io/agentruntime/llms-full.txt) | [repo](https://github.com/limecloud/agentruntime) |
| Agent Evidence | evidence、provenance、verification、review、replay 与 export。 | [site](https://limecloud.github.io/agentevidence/) | [llms-full](https://limecloud.github.io/agentevidence/llms-full.txt) | [repo](https://github.com/limecloud/agentevidence) |
| Agent Policy | risk、permission、approval、retention、waiver、access 与 policy decision facts。 | [site](https://limecloud.github.io/agentpolicy/) | [llms-full](https://limecloud.github.io/agentpolicy/llms-full.txt) | [repo](https://github.com/limecloud/agentpolicy) |

## 边界规则

```text
Agent Knowledge -> Agent 可以使用哪些 durable source-grounded context
Agent Runtime   -> Agent 工作如何被接受、执行、控制和恢复
Agent UI        -> Agent 工作如何投影到用户可见表面
Agent Evidence  -> Agent 结果为什么可信、可复查、可重放、可导出
Agent Policy    -> Agent 动作是否可以继续以及需要哪些约束
```

## 未来标准候选

| Candidate | 为什么可能成为标准 |
| --- | --- |
| Agent Artifact | 生成物、版本、diff、preview、export 与 handoff refs。 |
| Agent Tool | capability declarations、permissions、progress、results、large outputs 与 audit refs。 |
| Agent Context | working context、memory、compaction、missing context 与 source selection boundaries。 |
| Agent Evaluation | acceptance scenarios、rubrics、eval runs、quality gates 与 evidence-backed benchmark records。 |
| Agent Workflow | portable multi-step plans、scene launches、background jobs 与 handoff states。 |
| Agent Model Routing | task profiles、model candidates、routing decisions、fallback、quota 与 cost records。 |
