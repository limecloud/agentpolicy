---
title: Runtime profile test cases
description: Test matrix for policy decisions used by Agent Runtime-compatible tools, actions, routing, and evidence.
---

# Runtime profile test cases

Use these cases when Agent Policy is used by Agent Runtime, Lime AgentRuntime Profile, or an equivalent runtime spine. The goal is to prove that policy decisions, approvals, grants, waivers, redaction, and retention facts can be referenced by runtime events without becoming runtime execution itself.

## Canonical boundary

```text
RiskScope / PolicyDecision / ApprovalRequest / PermissionGrant / WaiverRecord / PolicyTrace
  -> permission.*, action.*, sandbox.*, tool.*, model routing, evidence, and UI refs
  -> Runtime enforces; UI renders; Evidence records
```

Agent Policy owns the decision fact. Runtime owns enforcement and execution. UI owns presentation. Evidence owns audit packaging.

## Runtime correlation fields

Policy events SHOULD preserve these ids when available:

| Field | Purpose |
| --- | --- |
| `runtime_id` / `session_id` / `thread_id` / `turn_id` | Scope a policy decision to a runtime turn. |
| `task_id` / `run_id` / `attempt_id` | Scope a decision to a task attempt. |
| `step_id` / `tool_call_id` / `action_id` | Join tool requests and action waits to policy decisions. |
| `evidence_id` / `trace_id` | Join policy traces to evidence and telemetry. |
| `context_id` / `artifact_id` | Join policy decisions to adjacent owners. |

## Test cases

| ID | Case | Input facts | Expected result |
| --- | --- | --- | --- |
| APOL-AR-ID-001 | Decision preserves runtime ids | Tool or model action is evaluated | Policy event includes `session_id/thread_id/turn_id` and applicable task/run ids. |
| APOL-AR-RISK-001 | Risk scope is explicit | Tool touches filesystem/network/credential | Risk scope names action, resource, actor, context refs, and severity. |
| APOL-AR-DEC-001 | Allow does not execute by itself | Policy returns `allow` | Runtime still emits enforcement/tool events; policy only records decision. |
| APOL-AR-ASK-001 | Ask maps to runtime action | Policy returns `ask` | Runtime can emit `permission.evaluated` and `action.required` with `action_id`. |
| APOL-AR-DENY-001 | Deny blocks execution | Policy returns `deny` | Runtime emits denied/blocked fact; no successful tool result is implied by policy alone. |
| APOL-AR-GRANT-001 | Permission grant is bounded | User approves request | Grant carries constraints, expiry, scope, actor, and `action_id`. |
| APOL-AR-WAIVER-001 | Waiver preserves original decision | User or admin waives deny/ask | Waiver links original decision, reason, approver, expiry, and evidence refs. |
| APOL-AR-REDACT-001 | Redaction/retention is enforceable | Evidence or context export includes sensitive data | Policy obligations are referenced by context/evidence/export without exposing raw secrets. |
| APOL-AR-DELEGATE-001 | Delegated approval keeps source | Subagent or remote agent asks for permission | Approval request includes parent/child or remote ids and delegated actor. |
| APOL-AR-TRACE-001 | Policy trace joins runtime/evidence | Evidence pack is exported | Policy trace refs can join decision, action, tool call, runtime ids, and evidence ids. |

## Failure cases

These are incompatible with Agent Policy:

1. A policy record claims a tool executed successfully.
2. UI marks approval resolved before runtime confirms `action.resolved` or grant issuance.
3. A grant lacks scope, expiry, or actor information.
4. A waiver hides the original denied or ask decision.
5. Delegated/remote approval drops parent session/thread/task lineage.
6. Redaction obligations are only UI copy and not referenced by context/evidence export.

## Minimum validation set

For Agent Runtime-compatible integration, run at least:

1. APOL-AR-ID-001 and APOL-AR-RISK-001.
2. APOL-AR-DEC-001, APOL-AR-ASK-001, and APOL-AR-DENY-001.
3. APOL-AR-GRANT-001 and APOL-AR-WAIVER-001.
4. APOL-AR-DELEGATE-001 and APOL-AR-TRACE-001.

Runtime proves enforcement happened. Agent Policy proves why a decision, approval, grant, waiver, or redaction obligation existed.
