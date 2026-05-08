---
title: Tool approval
description: Example policy flow for a risky tool call.
---

# Tool Approval

A runtime wants to run a shell command in a workspace.

## Decision

```json
{
  "schema_version": "0.1.0",
  "decision_id": "poldec_tool_001",
  "policy_set_id": "workspace-tool-policy",
  "policy_version": "v1",
  "evaluated_at": "2026-05-08T10:00:00Z",
  "subject": { "type": "agent", "id": "agent_123" },
  "action": { "type": "tool_call", "name": "shell.run" },
  "resource": { "type": "workspace", "id": "repo_456" },
  "context": { "mode": "auto", "command_preview": "npm test" },
  "scope": { "scope_type": "tool_call", "risk_level": "high" },
  "result": "ask",
  "reason_codes": ["shell_command_risk"],
  "obligations": [
    { "type": "sandbox", "profile": "workspace_command" },
    { "type": "parameter_restriction", "pattern": "workspace_relative_paths_only" }
  ]
}
```

## Flow

1. Runtime receives `ask` and pauses execution.
2. UI renders an approval request with command preview, sandbox, and risk reason.
3. User chooses `approve_once`.
4. Policy layer emits a session-scoped permission grant.
5. Runtime executes within the sandbox.
6. Evidence records decision, approval, grant, tool call, and trace refs.
