---
title: 什么是 Agent Policy
description: Agent Policy 标准的范围与边界。
---

# 什么是 Agent Policy

Agent Policy 定义 Agent 系统里的策略决策层。它不是策略引擎，而是把“这个 Agent 动作是否可以继续、需要什么约束、为什么这样决定、谁批准了风险”记录成可移植事实。

Agent 不再只是调用一个 API。它可能调用工具、读取知识、写文件、创建 Artifact、路由模型、保存记忆、使用凭证、访问网络、委托子 Agent，并请求人类确认。Agent Policy 为这些动作提供统一的策略词汇，让 Runtime 能执行、UI 能展示、Evidence 能审计、远程 Agent 能交换。

## 适用场景

- 工具调用需要参数限制、沙箱或审批。
- 模型路由需要考虑敏感度、成本、本地化、租户策略或安全约束。
- Artifact 导出需要脱敏、保留、水印或 reviewer sign-off。
- 记忆、知识、检索和来源访问需要范围与目的限制。
- 远程 Agent、委托任务或 peer system 需要能力授权与审计 refs。
- Runtime 需要机器可读的 `allow`、`deny`、`ask`、`defer`、`escalate` 或 `indeterminate` 原因。

## 不是什么

Agent Policy 不是 policy engine、不是 OAuth/OIDC、不是 UI 组件、不是 Runtime executor、不是 Evidence archive，也不是法律合规结论。

| 相邻系统 | 它拥有 | Agent Policy 拥有 |
| --- | --- | --- |
| Policy engine | 规则语言与评估引擎。 | Agent 场景下可交换的决策事实与 obligations。 |
| Identity provider | 登录、会话、token、scope。 | 身份与上下文已知后的 Agent 动作决策。 |
| Runtime | 工具执行、沙箱、中断、恢复。 | 决策输入、结果、grant、obligation 与 trace。 |
| UI | 审批表单、风险提示、timeline card。 | 审批请求语义与响应事实。 |
| Evidence | 信任图、provenance、replay、export。 | 可被 Evidence 纳入的策略决策与 trace refs。 |
| Artifact store | 字节、版本、预览、导出。 | 导出策略、脱敏、保留与访问决策。 |

## 最小兼容结果

最小实现只需要在一个高风险动作前导出一个 `policy_decision`，包含 subject、action、resource、context、result、reason_codes、obligations、expires_at 与 refs。更完整的实现会继续导出 `approval_request`、`permission_grant`、`risk_scope`、`waiver_record` 和 `policy_trace`。
