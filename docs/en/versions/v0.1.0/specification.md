---
title: v0.1.0 specification
description: Versioned Agent Policy v0.1.0 specification.
---

# v0.1.0 Specification

This page snapshots the v0.1.0 contract. See the [latest specification](../../specification) for the current draft text.

## Core result vocabulary

`allow`, `deny`, `ask`, `defer`, `escalate`, `waive`, `not_applicable`, and `indeterminate`.

## Core objects

`policy_decision`, `risk_scope`, `approval_request`, `permission_grant`, `redaction_policy`, `retention_policy`, `waiver_record`, `policy_trace`, and policy event envelopes.

## Compatibility

- Producers should include `schema_version: "0.1.0"`.
- Consumers should ignore unknown fields.
- Decisions should preserve subject, action, resource, context, result, reason codes, obligations, and refs.
