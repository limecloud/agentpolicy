---
title: Interoperability
description: Agent Policy 如何适配引擎、身份、Runtime、UI、Evidence 与 peer protocols。
---


# Interoperability

Agent Policy 是 engine-neutral 的。它可以包裹本地规则、配置、托管 policy service、OPA、Cedar、XACML-like 服务、人类 review queue 或身份感知网关的输出。

| System | 对齐方式 |
| --- | --- |
| OPA | 结构化输入与结构化决策输出可被 Agent Policy 归一化。 |
| Cedar | PARC 模型自然映射到 subject/action/resource/context。 |
| XACML | PDP/PEP 分离与决策词汇帮助定义 fail-closed 行为。 |
| OAuth/OIDC | Token 和 scope 是输入或 refs，不等于具体 Agent 动作安全。 |
| MCP | Tool/resource/prompt call 可成为 policy action。 |
| A2A | Peer-agent task 与 artifact handoff 可携带 policy refs。 |
| CloudEvents | Policy event 可使用通用 event envelope。 |
| OpenTelemetry | Policy decision 可关联 trace、span 与 GenAI telemetry。 |
| Agent Evidence | Evidence pack 可纳入 decisions、approvals、grants、waivers 与 traces。 |

## Agent Runtime profile alignment

对 Agent Runtime 兼容系统，Agent Policy decisions 应被 `permission.*`、`action.*`、`sandbox.*`、`tool.*`、routing、evidence 与 UI facts 引用：

```text
RiskScope / PolicyDecision / ApprovalRequest / PermissionGrant / WaiverRecord / PolicyTrace
  -> RuntimeEvent refs
  -> ThreadReadModel pending actions
  -> EvidencePack policy refs
```

Policy MUST NOT 执行工具、标记 action resolved 或声明 task completion。Runtime 负责执行 decisions 并发出 execution facts；policy 记录 decision、grant、waiver、redaction 或 retention obligation 为什么存在。
