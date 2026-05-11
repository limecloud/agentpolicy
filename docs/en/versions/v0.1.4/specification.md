---
title: v0.1.4 specification
description: Agent Policy v0.1.4 specification snapshot.
---

# Specification

Agent Policy latest draft is a portable standard for policy decisions around agent work. It defines the facts needed to evaluate, explain, approve, enforce, waive, redact, retain, and audit agent actions across runtimes, UI surfaces, evidence systems, tools, models, artifacts, knowledge sources, and peer agents.

Agent Policy owns decision semantics and policy trace contracts. It does not own the rule language, policy engine, identity provider, runtime executor, UI renderer, artifact store, trace backend, or legal compliance conclusion.

## Scope

Agent Policy standardizes these implementation concerns:

1. Policy decision identity, inputs, result, reason codes, obligations, advice, expiry, and refs.
2. Risk scopes for tool calls, model calls, artifact exports, source access, credential use, filesystem, network, remote agents, data retention, redaction, and human actions.
3. Approval requests that can be rendered by UI but are not UI components.
4. Permission grants with constraints, duration, provenance, revocation, and delegation boundaries.
5. Redaction and retention obligations for data moving through agent systems.
6. Waiver records that explain bounded overrides without hiding the original decision.
7. Policy traces that link inputs, policy engines, policy sets, matched rules, decisions, approvals, grants, telemetry, and evidence refs.
8. Interoperability with policy engines, identity systems, runtime event streams, evidence packs, artifacts, tools, knowledge sources, and peer-agent protocols.
9. Runtime profile tests that prove policy decisions can be referenced by runtime permission/action/tool/evidence facts without becoming execution facts.

Agent Policy does **not** standardize a policy language, OAuth profile, UI component library, prompt format, model API, artifact byte format, vector store, task language, or compliance certification process.

## Reference architecture

```text
Agent / UI / peer system
  -> policy input builder
  -> policy engine or evaluator
  -> Agent Policy decision
  -> runtime enforcement / approval / escalation
  -> evidence and telemetry correlation
```

A compatible implementation may use a local rules file, a hosted policy engine, embedded code, a Cedar or OPA adapter, an access-control service, or a human review queue. The portable contract is the exported Agent Policy record.

## Core objects

| Object | Purpose |
| --- | --- |
| `policy_decision` | The result of evaluating a proposed agent action. |
| `risk_scope` | A typed description of the risk boundary affected by the action. |
| `approval_request` | A structured prompt for a human, service, or policy authority to approve, reject, modify, or escalate. |
| `permission_grant` | A bounded permission issued after policy evaluation or approval. |
| `redaction_policy` | Obligations for hiding, transforming, withholding, or tokenizing sensitive data. |
| `retention_policy` | Obligations for storing, expiring, deleting, or exporting data. |
| `waiver_record` | A bounded override with justification and review requirements. |
| `policy_trace` | A correlation graph across inputs, policy sets, engines, matched rules, decisions, grants, waivers, telemetry, and evidence. |

## Identity model

| Identity | Meaning |
| --- | --- |
| `decision_id` | Stable id for a policy decision. |
| `policy_set_id` | Policy collection, bundle, tenant policy set, or rule group used for evaluation. |
| `policy_version` | Version of the evaluated policy set or bundle. |
| `rule_id` | Stable id for a matched rule or control. |
| `risk_scope_id` | Stable id for a risk scope. |
| `approval_id` | Stable id for an approval request. |
| `grant_id` | Stable id for a permission grant. |
| `waiver_id` | Stable id for a waiver. |
| `trace_id` | Stable id for a policy trace. |
| `evidence_pack_id` | Optional Agent Evidence pack ref. |
| `task_id`, `run_id`, `thread_id`, `turn_id` | Optional runtime correlation refs. |

A compatible implementation MUST NOT collapse all policy facts into one message id. Decisions, approvals, grants, waivers, traces, and risk scopes need separate identities because they can be created, updated, revoked, exported, and audited at different times.

## Policy decision envelope

Every exported `policy_decision` SHOULD include:

| Field | Requirement |
| --- | --- |
| `schema_version` | Required Agent Policy schema version. |
| `decision_id` | Required stable id. |
| `policy_set_id`, `policy_version` | Required when a policy set is known. |
| `evaluated_at` | Required timestamp. |
| `subject` | Required actor requesting the action. |
| `action` | Required action object. |
| `resource` | Required resource object. |
| `context` | Required contextual facts or refs. |
| `scope` | Required risk, trust, tenancy, session, or runtime scope. |
| `result` | Required decision result. |
| `reason_codes` | Required machine-readable reasons. |
| `matched_rules` | Recommended rule refs. |
| `obligations` | Recommended enforceable duties. |
| `advice` | Optional non-binding guidance. |
| `expires_at` | Recommended for grants, asks, and context-sensitive allows. |
| `refs` | Optional runtime, telemetry, evidence, artifact, source, and peer refs. |

## Result semantics

| Result | Runtime behavior |
| --- | --- |
| `allow` | Runtime may execute only within constraints and obligations. |
| `deny` | Runtime must not execute the action. |
| `ask` | Runtime must pause and create or link an approval request. |
| `defer` | Runtime must wait for missing facts or another policy source. |
| `escalate` | Runtime must route to a stronger approver or authority. |
| `waive` | Runtime may continue only if the waiver is valid and within scope. |
| `not_applicable` | Runtime may continue only if a separate default policy allows it. |
| `indeterminate` | Runtime should fail closed unless a product explicitly defines a safe fallback. |

## Risk levels

Agent Policy uses a conservative risk vocabulary:

| Risk level | Meaning |
| --- | --- |
| `none` | No meaningful risk beyond normal execution. |
| `low` | Reversible or low-impact action. |
| `medium` | User-visible, state-changing, or privacy-relevant action. |
| `high` | Expensive, external, credentialed, destructive, or hard-to-reverse action. |
| `critical` | Potential production, legal, financial, safety, security, or broad data impact. |
| `unknown` | Risk cannot be determined from available facts. |

## Risk scope types

Compatible implementations SHOULD use these initial scope types:

- `tool_call`
- `model_call`
- `artifact_export`
- `source_access`
- `credential_use`
- `filesystem`
- `network`
- `remote_agent`
- `data_retention`
- `redaction`
- `human_action`
- `memory_write`
- `task_delegation`
- `ui_surface`
- `cost_or_quota`

## Approval request contract

An `approval_request` SHOULD be emitted when the decision result is `ask` or `escalate`.

Required fields:

- `approval_id`
- `decision_id`
- `requested_action`
- `required_approver`
- `prompt`
- `choices`
- `default_action`
- `status`
- `created_at`
- `expires_at`

Approval choices SHOULD be explicit and auditable. Avoid boolean-only prompts for high-risk work. Use choices such as `approve_once`, `approve_for_scope`, `deny`, `modify`, `escalate`, and `request_more_info`.

## Permission grant contract

A `permission_grant` records a bounded permission. It may come from policy, user approval, admin approval, a delegated authority, a token exchange, or a pre-existing session rule.

Required fields:

- `grant_id`
- `decision_id` or `approval_id`
- `granted_to`
- `capability`
- `constraints`
- `issued_by`
- `issued_at`
- `expires_at`
- `status`

A grant SHOULD be narrow by default. Include allowed action, resource pattern, parameter restrictions, trust boundary, session scope, revocation state, and evidence refs.

## Redaction and retention obligations

Policy decisions can carry data obligations:

| Obligation | Meaning |
| --- | --- |
| `redact_before_display` | UI or runtime must transform sensitive content before display. |
| `redact_before_export` | Exporter must transform or withhold content before artifact export. |
| `retain_until` | Keep required data until a timestamp or retention event. |
| `delete_after` | Delete or expire data after a timestamp or duration. |
| `keep_audit_shape` | Preserve ids, hashes, and reason codes even when payload is removed. |
| `withhold_raw_payload` | Reference private data without embedding it. |

A retention decision SHOULD distinguish payload retention from audit metadata retention. Removing private bytes should not erase the existence of the decision.

## Waivers

A `waiver_record` is not a hidden allow. It is a separate fact that links to the original decision, names the waiving authority, gives a justification, limits the scope, expires, and states whether later review is required.

Waivers SHOULD NOT remove denied or failed policy facts from traces. They should make the override explicit.

## Policy trace

A `policy_trace` SHOULD link:

- input refs and normalized input hash.
- engine refs, bundle refs, policy set ids, and policy versions.
- matched rules and reason codes.
- decisions, approvals, grants, waivers, redaction records, and retention records.
- runtime event ids, task ids, tool call ids, model call ids, artifact ids, source ids, telemetry ids, and evidence pack ids.

Traces SHOULD be compact. Large policy inputs, full documents, raw prompts, full tool outputs, and private data should remain in owning systems and be referenced.

## Event envelope

Agent Policy events MAY be transported through runtime streams, queues, logs, CloudEvents-like envelopes, or domain APIs. Every exported event SHOULD include:

| Field | Requirement |
| --- | --- |
| `type` | Required event class. |
| `event_id` | Required unique event id. |
| `timestamp` | Required producer timestamp. |
| `schema_version` | Required Agent Policy event schema version. |
| `decision_id`, `approval_id`, `grant_id`, `waiver_id`, `trace_id` | Present when applicable. |
| `subject` | Optional scoped actor. |
| `payload` | Typed event payload or ref. |
| `refs` | Optional runtime, telemetry, evidence, artifact, source, and peer refs. |

## Event classes

Compatible implementations SHOULD emit or export these event classes:

- `policy.decision.created`
- `policy.decision.updated`
- `policy.approval.requested`
- `policy.approval.responded`
- `policy.grant.issued`
- `policy.grant.revoked`
- `policy.waiver.created`
- `policy.redaction.required`
- `policy.retention.required`
- `policy.trace.linked`
- `policy.warning`
- `policy.error`

## Fail-closed defaults

Agent Policy recommends fail-closed behavior for `deny`, `ask`, `escalate`, and `indeterminate` unless a product explicitly declares a safer fallback. A runtime should not silently convert `not_applicable` or `indeterminate` into `allow` without a separate default policy.

## Version compatibility

Version `0.1.0` is a draft. Implementations SHOULD include `schema_version: "0.1.0"` and tolerate unknown fields. Producers SHOULD keep core field names stable and add optional fields rather than changing result semantics.
