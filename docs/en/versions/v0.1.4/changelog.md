---
title: v0.1.4 changelog
description: Agent Policy v0.1.4 changelog.
---

# v0.1.4 Changelog

### Added

- Adds Agent Runtime profile test cases in English and Simplified Chinese, covering runtime ids, risk scopes, decisions, ask/deny/allow mapping, grants, waivers, delegated approvals, redaction, and policy traces.

### Changed

- Aligns interoperability guidance with Agent Runtime `permission.*`, `action.*`, `sandbox.*`, `tool.*`, evidence, and UI refs.
- Extends the Agent Policy event schema with optional runtime correlation fields such as `runtime_id`, `session_id`, `thread_id`, `turn_id`, `task_id`, `run_id`, `attempt_id`, `step_id`, `tool_call_id`, `action_id`, `evidence_id`, `context_id`, and `artifact_id`.
