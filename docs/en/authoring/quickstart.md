---
title: Implementation quickstart
description: A small path to implement Agent Policy.
---

# Implementation Quickstart

## 1. Pick one risky action

Start with one action that already needs policy: shell command execution, file write, external model call, artifact export, credential use, or remote agent delegation.

## 2. Build the policy input

Normalize the request into:

```json
{
  "subject": { "type": "agent", "id": "agent_123" },
  "action": { "type": "tool_call", "name": "shell.run" },
  "resource": { "type": "workspace", "id": "repo_456" },
  "context": { "mode": "auto", "thread_id": "thread_123" },
  "scope": { "scope_type": "tool_call", "risk_level": "high" }
}
```

## 3. Evaluate policy

Use any evaluator: a local table, configuration, hosted policy service, OPA, Cedar, XACML-like service, or code. Export the result as `policy_decision`.

## 4. Enforce before execution

- `allow`: enforce obligations, then execute.
- `deny`: stop and record the denial.
- `ask`: create an approval request and pause.
- `escalate`: route to a stronger authority.
- `defer`: wait for missing facts.
- `indeterminate`: fail closed unless a safe fallback is declared.

## 5. Record follow-up facts

If approval happens, emit `approval_request` and `permission_grant`. If an override happens, emit `waiver_record`. If an exporter redacts data, emit redaction and retention obligations. Link everything with `policy_trace`.

## 6. Validate schemas

Publish compact JSON that validates against the draft schemas in `docs/public/schemas/`. Keep large payloads in owning systems and use refs.
