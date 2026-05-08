---
title: 策略模型
description: Agent Policy 的核心建模方式。
---

# 策略模型

Agent Policy 把策略建模为位于 Agent 意图与执行之间的小型结构化事实。标准不要求特定规则语言或引擎，只要求策略评估结果可以跨系统交换。

## 核心循环

```text
agent intent -> policy input -> decision -> obligation -> execution or approval -> trace
```

1. Runtime、orchestrator 或 peer agent 提出动作。
2. Policy 层接收 subject、action、resource、context、risk scope 与既有 grants。
3. Policy 层返回 `policy_decision`。
4. Runtime 执行 `allow`，阻断 `deny`，为 `ask` 暂停，为 `defer` 等待，为 `escalate` 路由，为 `indeterminate` 失败关闭。
5. UI 可渲染 `approval_request`；人或服务可返回 `permission_grant`。
6. Evidence 系统记录 decision、approval、grant、waiver 与 trace。

## Subject / Action / Resource / Context

| 轴 | Agent 系统含义 |
| --- | --- |
| `subject` | 请求动作的用户、Agent、服务、子 Agent、会话或凭证。 |
| `action` | 工具调用、模型调用、文件写入、网络访问、导出、记忆写入、来源读取或任务委托。 |
| `resource` | 文件、URL、凭证、模型、工具、Artifact、记忆命名空间、来源集合、Runtime 或远程 Agent。 |
| `context` | 会话、信任边界、敏感度、风险、模式、时间、成本、配额、目的与 evidence refs。 |

## 决策结果

| Result | 含义 |
| --- | --- |
| `allow` | 可在列出的约束和 obligations 下继续。 |
| `deny` | 必须阻断。 |
| `ask` | 执行前需要审批。 |
| `defer` | 等待缺失事实、依赖或再次评估。 |
| `escalate` | 需要更高信任级别的审批者或策略权威。 |
| `waive` | 在有边界的 waiver 下覆盖规则。 |
| `not_applicable` | 没有相关策略适用。 |
| `indeterminate` | 输入或引擎状态不足，无法判断。 |

## Obligations 与 advice

`obligations` 是必须执行的职责，例如沙箱、脱敏、保留期限、本地模型限制或 trace 写入。`advice` 是非强制建议，例如更安全替代方案或 UI 文案。
