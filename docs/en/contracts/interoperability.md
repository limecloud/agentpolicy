---
title: Interoperability
description: How Agent Policy fits with engines, auth, runtime, UI, evidence, and peer protocols.
---


# Interoperability

Agent Policy is intentionally engine-neutral. It can wrap outputs from a rule engine, authorization service, access-control gateway, identity-aware proxy, local settings resolver, or human review flow.

## Alignment map

| System | Alignment |
| --- | --- |
| OPA | Can evaluate arbitrary structured input and return structured decisions; Agent Policy can normalize the result for agent systems. |
| Cedar | PARC-style authorization maps naturally to subject/action/resource/context. |
| XACML | PDP/PEP separation and decision vocabulary inform fail-closed enforcement. |
| OAuth/OIDC | Tokens and scopes can be inputs or refs, but Agent Policy does not mint or validate tokens. |
| MCP | Tool/resource/prompt calls can be policy actions; Agent Policy can describe approval and grant semantics around them. |
| A2A | Peer-agent tasks and artifacts can carry policy refs during delegation and handoff. |
| CloudEvents | Policy events can be transported in a common event envelope. |
| OpenTelemetry | Policy decisions can correlate with traces, spans, and GenAI semantic events. |
| Agent Evidence | Evidence packs can include policy decisions, approvals, grants, waivers, and traces. |

## Agent Runtime profile alignment

For Agent Runtime-compatible systems, Agent Policy decisions should be referenced by `permission.*`, `action.*`, `sandbox.*`, `tool.*`, routing, evidence, and UI facts:

```text
RiskScope / PolicyDecision / ApprovalRequest / PermissionGrant / WaiverRecord / PolicyTrace
  -> RuntimeEvent refs
  -> ThreadReadModel pending actions
  -> EvidencePack policy refs
```

Policy MUST NOT execute tools, mark actions resolved, or declare task completion. Runtime enforces decisions and emits execution facts; policy records why a decision, grant, waiver, redaction, or retention obligation existed.

## Boundary rule

If the question is "how do I write rules?", use a policy engine. If the question is "who is authenticated?", use identity and authorization infrastructure. If the question is "what did the agent policy decide and how should adjacent systems exchange that fact?", use Agent Policy.
