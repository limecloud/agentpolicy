---
title: Redaction and retention
description: Data handling obligations attached to policy decisions.
---


# Redaction and Retention

Agent Policy can carry obligations for data transformation and lifetime. These obligations are separate from the systems that store bytes, render UI, or export artifacts.

## Redaction policies

A redaction obligation should describe:

- `classification`: data class, such as secret, personal data, customer data, source code, credential, or payment data.
- `action`: redact, mask, hash, tokenize, summarize, withhold, or require review.
- `transform`: deterministic hash, reversible token, irreversible mask, field removal, or range removal.
- `export_scope`: display, log, evidence, support bundle, artifact export, model call, or peer handoff.
- `reason_code`: why the transform is required.

## Retention policies

A retention obligation should describe:

- payload retention duration.
- audit metadata retention duration.
- deletion trigger.
- legal hold or review requirement.
- allowed export class.
- evidence and trace refs preserved after deletion.

## Audit shape

A secure system can delete private payloads while preserving audit shape: ids, hashes, timestamps, reason codes, decision refs, and proof that redaction happened.
