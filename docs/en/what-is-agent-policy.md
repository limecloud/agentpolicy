---
title: What is Agent Policy?
description: The scope and boundary of the Agent Policy standard.
---

# What is Agent Policy?

Agent Policy defines the decision layer for agent systems. It is the portable record of whether an agent action is allowed, denied, requires approval, must be deferred, must be escalated, can be waived, or cannot be evaluated with the available facts.

It is designed for agent products where policy is no longer a single access-control check. A modern agent may call tools, read sources, write files, spawn subagents, route work to models, export artifacts, store memory, use credentials, cross trust boundaries, and ask humans for permission. Those actions need a common policy vocabulary that can be rendered in UI, enforced by runtime, audited by evidence systems, and exchanged with peer agents.

## Use Agent Policy when

- tool calls require parameter restrictions, sandbox profiles, or approval.
- model routing depends on sensitivity, cost, locality, tenant rules, or safety constraints.
- artifact export requires redaction, retention, watermarking, or reviewer sign-off.
- memory, knowledge, retrieval, and source access need scope and purpose limits.
- remote agents, delegated tasks, or peer systems need capability grants and audit refs.
- runtime needs a machine-readable reason for `allow`, `deny`, `ask`, `defer`, `escalate`, or `indeterminate`.
- evidence packages need to show why a risky action was permitted, blocked, or waived.

## What it is not

Agent Policy is not a policy engine, not an authorization protocol, not a legal compliance verdict, not a UI approval component, not a runtime executor, and not an evidence archive.

Existing systems keep their jobs:

| Adjacent system | Owns | Agent Policy owns |
| --- | --- | --- |
| Policy engine | Rule language and evaluation engine. | Portable decision facts and agent-specific obligations. |
| Identity provider | Authentication, sessions, tokens, scopes. | Agent action decisions after identity and context are available. |
| Runtime | Tool execution, sandboxing, interruption, recovery. | Decision inputs, results, grants, obligations, and traces. |
| UI | Approval forms, warnings, timeline cards. | Approval request semantics and response facts. |
| Evidence | Trust graph, provenance, replay, export. | Policy decisions and trace refs that evidence can include. |
| Artifact store | Bytes, versions, previews, exports. | Export policy, redaction, retention, and access decisions. |

## Minimum compatible outcome

A minimal compatible implementation can emit one `policy_decision` before a risky action. That decision should include subject, action, resource, context, result, reason codes, obligations, expiry, and trace refs.

A stronger implementation adds `approval_request`, `permission_grant`, `risk_scope`, `waiver_record`, redaction and retention obligations, and `policy_trace` records so the decision survives UI changes, runtime migrations, and audit export.
