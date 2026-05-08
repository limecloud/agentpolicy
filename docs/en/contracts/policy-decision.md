---
title: Policy decision
description: The portable result of evaluating a proposed agent action.
---


# Policy Decision

`policy_decision` is the central Agent Policy object. It answers: can this agent action proceed, under which constraints, and why?

## Required shape

```json
{
  "schema_version": "0.1.0",
  "decision_id": "poldec_01JZ...",
  "policy_set_id": "workspace-defaults",
  "policy_version": "2026-05-08",
  "evaluated_at": "2026-05-08T10:00:00Z",
  "subject": { "type": "agent", "id": "agent_123" },
  "action": { "type": "tool_call", "name": "shell.run" },
  "resource": { "type": "workspace", "id": "repo_456" },
  "context": { "mode": "auto", "surface": "workspace" },
  "scope": { "scope_type": "tool_call", "risk_level": "high" },
  "result": "ask",
  "reason_codes": ["shell_command_risk", "requires_human_approval"],
  "obligations": [
    { "type": "sandbox", "profile": "workspace_command" }
  ]
}
```

## Producer rules

- Use stable ids and timestamps.
- Preserve subject, action, resource, and context even when the decision denies execution.
- Include machine-readable `reason_codes`; human prose is not enough.
- Include obligations when `allow`, `ask`, `escalate`, or `waive` depends on conditions.
- Link approvals, grants, waivers, runtime events, telemetry, and evidence through `refs`.

## Consumer rules

- Treat `deny`, `ask`, `escalate`, and `indeterminate` as blocking until explicitly resolved.
- Enforce obligations before execution, export, display, or storage.
- Do not reinterpret `advice` as an enforceable control.
- Record any override as a `waiver_record`, not as a silent mutation of the decision.
