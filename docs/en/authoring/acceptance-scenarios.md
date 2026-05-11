---
title: Acceptance scenarios
description: Scenarios a compatible Agent Policy implementation should pass.
---

# Acceptance Scenarios

## Tool approval

Given a high-risk shell command, the policy layer returns `ask`, the UI renders an approval request, the user approves once, runtime receives a scoped grant, and evidence can link the decision, approval, grant, tool call, and trace.

## Artifact export

Given an artifact export containing sensitive fields, policy returns `allow` with `redact_before_export` and `keep_audit_shape` obligations. The exporter transforms payloads, preserves ids and hashes, and evidence records the redaction.

## Model routing

Given a sensitive task and external model candidate, policy returns `deny` for the external model and `allow` for a local or private model under a purpose-bound grant.

## Remote delegation

Given a delegated task to a peer agent, policy issues a non-transferable grant with required returned refs. If the peer cannot enforce redaction, the origin system records `indeterminate` or `defer`.

## Waiver

Given a blocked production action, an authorized reviewer creates a waiver with expiry and review requirement. Runtime executes only within the waiver scope and evidence keeps the original denial visible.

## Retention expiry

Given a memory write, policy sets payload retention and audit metadata retention separately. When payload expires, audit shape remains available for review.

## Agent Runtime profile policy

Given a runtime tool call requires policy evaluation, the policy decision preserves runtime correlation ids and maps `ask` to a runtime action request. Runtime enforces the decision and emits execution facts; policy records why the decision, grant, waiver, redaction, or retention obligation existed. See [Runtime profile test cases](./runtime-profile-test-cases).
