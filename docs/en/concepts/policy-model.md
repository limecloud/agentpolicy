---
title: Policy model
description: Core modeling choices behind Agent Policy.
---

# Policy Model

Agent Policy models policy as small structured facts that sit between agent intent and execution. The standard does not require a specific engine or rule language. It requires that the result of policy evaluation can be exchanged across systems.

## The core loop

```text
agent intent -> policy input -> decision -> obligation -> execution or approval -> trace
```

1. The runtime, orchestrator, or peer agent proposes an action.
2. The policy layer receives subject, action, resource, context, risk scope, and prior grants.
3. The policy layer returns a `policy_decision`.
4. The runtime enforces `deny`, executes `allow`, pauses for `ask`, defers `defer`, routes `escalate`, or records `indeterminate`.
5. UI may render an `approval_request`; a human or service may return a `permission_grant`.
6. Evidence systems can store the decision, approval, grant, waiver, and policy trace.

## Subject, action, resource, context

Agent Policy uses a PARC-like shape because agent systems need the same stable axes:

| Axis | Meaning in agent systems |
| --- | --- |
| `subject` | User, agent, service, subagent, session, credential, or delegated actor requesting action. |
| `action` | Tool call, model call, file write, network access, export, memory write, source read, task delegation, or UI-visible action. |
| `resource` | File, URL, credential, model, tool, artifact, memory namespace, source collection, runtime, tenant, or remote agent. |
| `context` | Session state, trust boundary, sensitivity, risk score, user mode, time, location, cost, quota, purpose, and evidence refs. |

## Decision results

Agent Policy separates the decision result from enforcement:

| Result | Meaning |
| --- | --- |
| `allow` | The action may proceed under listed constraints and obligations. |
| `deny` | The action must not proceed. |
| `ask` | The action needs approval before execution. |
| `defer` | The action should wait for missing facts, dependency resolution, or a later policy evaluation. |
| `escalate` | The action requires a higher-trust approver or policy authority. |
| `waive` | A rule was overridden by an explicit waiver with bounded scope. |
| `not_applicable` | No relevant policy applied to the request. |
| `indeterminate` | The policy layer could not decide because inputs or engine state were insufficient or inconsistent. |

## Obligations and advice

A decision can carry enforceable `obligations` and non-binding `advice`.

Examples of obligations:

- run only inside a workspace sandbox.
- redact named fields before export.
- store memory for at most 30 days.
- require a second reviewer before publication.
- use only local or private models.
- emit a policy trace event before execution.

Advice can suggest safer alternatives, UI copy, or remediation, but the runtime is not required to enforce it.

## Identity and versioning

Policy records need independent ids. A session id or message id is not enough. Use stable ids for decisions, approvals, grants, waivers, rules, policy sets, traces, and risk scopes. Include `schema_version`, `policy_set_id`, and `policy_version` so later audits can understand which policy evaluated the action.
