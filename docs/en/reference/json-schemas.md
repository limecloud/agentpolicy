---
title: JSON Schemas
description: Public draft schemas for Agent Policy objects.
---

# JSON Schemas

The v0.1.0 schemas are draft interoperability anchors. They are intentionally permissive where products need extension, but strict about identity and result vocabulary.

| Schema | Purpose |
| --- | --- |
| [agentpolicy-decision.schema.json](../../schemas/agentpolicy-decision.schema.json) | Policy decision envelope. |
| [agentpolicy-risk-scope.schema.json](../../schemas/agentpolicy-risk-scope.schema.json) | Risk scope object. |
| [agentpolicy-approval-request.schema.json](../../schemas/agentpolicy-approval-request.schema.json) | Approval request object. |
| [agentpolicy-permission-grant.schema.json](../../schemas/agentpolicy-permission-grant.schema.json) | Permission grant object. |
| [agentpolicy-waiver.schema.json](../../schemas/agentpolicy-waiver.schema.json) | Waiver record object. |
| [agentpolicy-trace.schema.json](../../schemas/agentpolicy-trace.schema.json) | Policy trace object. |
| [agentpolicy-event.schema.json](../../schemas/agentpolicy-event.schema.json) | Event envelope. |

## Compatibility guidance

- Producers SHOULD include `schema_version`.
- Consumers SHOULD ignore unknown fields.
- Producers SHOULD keep core enum semantics stable.
- Large payloads SHOULD be referenced rather than embedded.
