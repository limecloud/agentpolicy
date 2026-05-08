---
title: 规范
description: Agent Policy 最新草案规范。
---

# 规范

Agent Policy 最新草案是面向 Agent 工作的可移植策略决策标准。它定义 Agent 动作在评估、解释、审批、执行、覆盖、脱敏、保留和审计时需要交换的事实。

Agent Policy 拥有决策语义与策略 trace 契约；不拥有规则语言、策略引擎、身份系统、Runtime executor、UI renderer、Artifact store、观测后端或法律合规结论。

## 范围

Agent Policy 标准化以下内容：

1. Policy decision 的身份、输入、结果、reason codes、obligations、advice、有效期与 refs。
2. 面向工具调用、模型调用、Artifact 导出、来源访问、凭证使用、文件系统、网络、远程 Agent、数据保留、脱敏和人类动作的 risk scopes。
3. 可由 UI 渲染但不等于 UI 组件的 approval requests。
4. 带约束、期限、来源、撤销和委托边界的 permission grants。
5. 跨 Agent 数据流的 redaction 与 retention obligations。
6. 带范围、理由、有效期和复审要求的 waiver records。
7. 连接 inputs、policy engines、policy sets、matched rules、decisions、approvals、grants、telemetry 与 evidence refs 的 policy traces。
8. 与策略引擎、身份系统、runtime event streams、evidence packs、artifacts、tools、knowledge sources 与 peer-agent protocols 的互操作。

Agent Policy 不标准化 policy language、OAuth profile、UI component library、prompt format、model API、artifact byte format、vector store、task language 或 compliance certification。

## 核心对象

| Object | 用途 |
| --- | --- |
| `policy_decision` | 对一个候选 Agent 动作的策略评估结果。 |
| `risk_scope` | 动作影响的风险边界。 |
| `approval_request` | 面向人、服务或策略权威的审批请求。 |
| `permission_grant` | 策略评估或审批后发出的有界权限。 |
| `redaction_policy` | 隐藏、转换、保留或 tokenize 敏感数据的义务。 |
| `retention_policy` | 存储、过期、删除或导出数据的义务。 |
| `waiver_record` | 带边界的覆盖记录。 |
| `policy_trace` | 策略输入、规则、决策、审批、授权、waiver、runtime、telemetry 与 evidence 的关联图。 |

## Policy decision envelope

每个 `policy_decision` SHOULD 包含：

| Field | 要求 |
| --- | --- |
| `schema_version` | 必填，Agent Policy schema version。 |
| `decision_id` | 必填，稳定 id。 |
| `policy_set_id`, `policy_version` | 已知策略集时必填。 |
| `evaluated_at` | 必填，评估时间。 |
| `subject` | 必填，请求动作的 actor。 |
| `action` | 必填，动作对象。 |
| `resource` | 必填，资源对象。 |
| `context` | 必填，上下文事实或 refs。 |
| `scope` | 必填，风险、信任、租户、会话或 runtime scope。 |
| `result` | 必填，策略结果。 |
| `reason_codes` | 必填，机器可读原因。 |
| `matched_rules` | 推荐，规则 refs。 |
| `obligations` | 推荐，可执行职责。 |
| `advice` | 可选，非强制建议。 |
| `expires_at` | 对 grant、ask 和上下文敏感 allow 推荐。 |
| `refs` | 可选，runtime、telemetry、evidence、artifact、source 与 peer refs。 |

## Result 语义

| Result | Runtime 行为 |
| --- | --- |
| `allow` | 只可在 constraints 和 obligations 下执行。 |
| `deny` | 必须阻断。 |
| `ask` | 必须暂停并创建或链接 approval request。 |
| `defer` | 等待缺失事实或其他策略源。 |
| `escalate` | 路由到更强审批者或权威。 |
| `waive` | 仅在 waiver 有效且在 scope 内时继续。 |
| `not_applicable` | 只有另一个默认策略允许时才可继续。 |
| `indeterminate` | 默认失败关闭，除非产品显式声明安全 fallback。 |

## 风险等级

`none`、`low`、`medium`、`high`、`critical`、`unknown`。其中 `unknown` 应被视为阻断，直到事实足够。

## Event classes

- `policy.decision.created`
- `policy.decision.updated`
- `policy.approval.requested`
- `policy.approval.responded`
- `policy.grant.issued`
- `policy.grant.revoked`
- `policy.waiver.created`
- `policy.redaction.required`
- `policy.retention.required`
- `policy.trace.linked`
- `policy.warning`
- `policy.error`

## 版本兼容

v0.1.0 是草案。实现 SHOULD 包含 `schema_version: "0.1.0"`，消费者 SHOULD 忽略未知字段，生产者 SHOULD 保持核心字段名与 result 语义稳定。
