---
title: Runtime Profile 测试用例
description: 验证 Agent Runtime 兼容工具、动作、路由与证据所使用的 policy decisions。
---

# Runtime Profile 测试用例

当 Agent Policy 被 Agent Runtime、Lime AgentRuntime Profile 或等价 runtime 主链使用时，执行这些用例。目标是证明 policy decisions、approvals、grants、waivers、redaction 与 retention facts 可以被 runtime events 引用，同时不变成 runtime execution 本身。

## 标准边界

```text
RiskScope / PolicyDecision / ApprovalRequest / PermissionGrant / WaiverRecord / PolicyTrace
  -> permission.*、action.*、sandbox.*、tool.*、model routing、evidence 与 UI refs
  -> Runtime enforces；UI renders；Evidence records
```

Agent Policy 拥有 decision fact。Runtime 拥有 enforcement 与 execution。UI 拥有 presentation。Evidence 拥有 audit packaging。

## Runtime correlation fields

Policy events SHOULD 在可用时保留这些 ids：

| Field | 作用 |
| --- | --- |
| `runtime_id` / `session_id` / `thread_id` / `turn_id` | 把 policy decision 限定到 runtime turn。 |
| `task_id` / `run_id` / `attempt_id` | 把 decision 限定到 task attempt。 |
| `step_id` / `tool_call_id` / `action_id` | 把 tool request 和 action wait join 到 policy decisions。 |
| `evidence_id` / `trace_id` | 把 policy trace join 到 evidence 与 telemetry。 |
| `context_id` / `artifact_id` | 把 policy decision join 到相邻 owners。 |

## 测试用例

| ID | 用例 | 输入事实 | 期望结果 |
| --- | --- | --- | --- |
| APOL-AR-ID-001 | Decision 保留 runtime ids | Tool 或 model action 被 evaluate | Policy event 包含 `session_id/thread_id/turn_id` 与适用 task/run ids。 |
| APOL-AR-RISK-001 | Risk scope 显式 | Tool 触达 filesystem/network/credential | Risk scope 说明 action、resource、actor、context refs 与 severity。 |
| APOL-AR-DEC-001 | Allow 本身不执行工具 | Policy 返回 `allow` | Runtime 仍需发出 enforcement/tool events；policy 只记录 decision。 |
| APOL-AR-ASK-001 | Ask 映射为 runtime action | Policy 返回 `ask` | Runtime 可发出带 `action_id` 的 `permission.evaluated` 与 `action.required`。 |
| APOL-AR-DENY-001 | Deny 阻止执行 | Policy 返回 `deny` | Runtime 发出 denied/blocked fact；policy 本身不暗示 successful tool result。 |
| APOL-AR-GRANT-001 | Permission grant 有边界 | 用户批准请求 | Grant 携带 constraints、expiry、scope、actor 与 `action_id`。 |
| APOL-AR-WAIVER-001 | Waiver 保留原始 decision | 用户或管理员 waive deny/ask | Waiver 连接 original decision、reason、approver、expiry 与 evidence refs。 |
| APOL-AR-REDACT-001 | Redaction/retention 可执行 | Evidence 或 context export 包含敏感数据 | Policy obligations 被 context/evidence/export 引用，且不暴露 raw secrets。 |
| APOL-AR-DELEGATE-001 | Delegated approval 保留来源 | Subagent 或 remote agent 请求权限 | Approval request 包含 parent/child 或 remote ids 与 delegated actor。 |
| APOL-AR-TRACE-001 | Policy trace join runtime/evidence | Evidence pack 被导出 | Policy trace refs 可 join decision、action、tool call、runtime ids 与 evidence ids。 |

## 失败用例

以下情况违反 Agent Policy：

1. Policy record 声称工具成功执行。
2. UI 在 runtime 确认 `action.resolved` 或 grant issued 前标记 approval resolved。
3. Grant 缺少 scope、expiry 或 actor 信息。
4. Waiver 隐藏原始 denied 或 ask decision。
5. Delegated/remote approval 丢失 parent session/thread/task lineage。
6. Redaction obligations 只是 UI 文案，没有被 context/evidence export 引用。

## Minimum validation set

对 Agent Runtime 兼容集成，至少执行：

1. APOL-AR-ID-001 与 APOL-AR-RISK-001。
2. APOL-AR-DEC-001、APOL-AR-ASK-001 与 APOL-AR-DENY-001。
3. APOL-AR-GRANT-001 与 APOL-AR-WAIVER-001。
4. APOL-AR-DELEGATE-001 与 APOL-AR-TRACE-001。

Runtime 证明 enforcement 发生。Agent Policy 证明 decision、approval、grant、waiver 或 redaction obligation 为什么存在。
