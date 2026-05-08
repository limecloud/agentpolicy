---
title: Agent 标准生态
description: Agent Knowledge、Agent UI、Agent Runtime、Agent Evidence、Agent Policy、Agent Artifact 与 Agent Tool 的相互链接。
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
| Agent Artifact | durable deliverables、versions、parts、previews、exports、source links 与 handoff packages。 | [site](https://limecloud.github.io/agentartifact/) | [llms-full](https://limecloud.github.io/agentartifact/llms-full.txt) | [repo](https://github.com/limecloud/agentartifact) |
| Agent Tool | tool declarations、surfaces、invocations、progress、results、permissions 与 audit refs。 | [site](https://limecloud.github.io/agenttool/) | [llms-full](https://limecloud.github.io/agenttool/llms-full.txt) | [repo](https://github.com/limecloud/agenttool) |

## 边界规则

```text
Agent Knowledge -> Agent 可以使用哪些 durable source-grounded context
Agent Runtime   -> Agent 工作如何被接受、执行、控制和恢复
Agent UI        -> Agent 工作如何投影到用户可见表面
Agent Evidence  -> Agent 结果为什么可信、可复查、可重放、可导出
Agent Policy    -> Agent 动作是否可以继续以及需要哪些约束
Agent Artifact  -> Agent 产出了什么 durable deliverable 以及它如何变化
Agent Tool      -> Agent 暴露、调用、推进并返回了什么能力
```

## 未来标准候选

| Candidate | 为什么可能成为标准 |
| --- | --- |
| Agent Context | working context、memory、compaction、missing context 与 source selection boundaries。 |
| Agent Evaluation | acceptance scenarios、rubrics、eval runs、quality gates 与 evidence-backed benchmark records。 |
| Agent Workflow | portable multi-step plans、scene launches、background jobs 与 handoff states。 |
| Agent Model Routing | task profiles、model candidates、routing decisions、fallback、quota 与 cost records。 |
