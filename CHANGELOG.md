# Changelog

## Unreleased

## v0.1.4 - 2026-05-11

### Added

- Adds Agent Runtime profile test cases in English and Simplified Chinese, covering runtime ids, risk scopes, decisions, ask/deny/allow mapping, grants, waivers, delegated approvals, redaction, and policy traces.

### Changed

- Aligns interoperability guidance with Agent Runtime `permission.*`, `action.*`, `sandbox.*`, `tool.*`, evidence, and UI refs.
- Extends the Agent Policy event schema with optional runtime correlation fields such as `runtime_id`, `session_id`, `thread_id`, `turn_id`, `task_id`, `run_id`, `attempt_id`, `step_id`, `tool_call_id`, `action_id`, `evidence_id`, `context_id`, and `artifact_id`.


## v0.1.3 - 2026-05-08

- Adds Agent Context to the current standards ecosystem map.
- Refreshes README, LLM entrypoints, and version snapshots for Agent Context discovery.

## v0.1.2 - 2026-05-08

- Adds Agent Tool to the current standards ecosystem map.
- Refreshes README, LLM entrypoints, and version snapshots for Agent Tool discovery.

## v0.1.1 - 2026-05-08

### Added

- Promoted Agent Artifact from future candidate to current Agent standards ecosystem links.
- Added Agent Artifact to README and LLM navigation entrypoints.
- Refreshed version navigation and public LLM copies for ecosystem discovery.

## v0.1.0 - 2026-05-08

Initial public draft of Agent Policy.

### Added

- Agent Policy specification, policy model, contracts, examples, reference pages, and version snapshot.
- English and Chinese documentation.
- JSON Schemas for decisions, risk scopes, approvals, grants, waivers, traces, and events.
- LLM entrypoints: `llms.txt`, `llms-full.txt`, `llm.txt`, and `llm-full.txt`.
- GitHub Pages publishing workflow.
