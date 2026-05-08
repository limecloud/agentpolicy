---
title: Artifact export policy
description: Example policy flow for redacted artifact export.
---

# Artifact Export Policy

A user exports a report artifact that contains sensitive fields.

## Decision

```json
{
  "schema_version": "0.1.0",
  "decision_id": "poldec_export_001",
  "policy_set_id": "artifact-export-policy",
  "policy_version": "v1",
  "evaluated_at": "2026-05-08T10:05:00Z",
  "subject": { "type": "user", "id": "user_123" },
  "action": { "type": "artifact_export", "format": "zip" },
  "resource": { "type": "artifact", "id": "artifact_report_456" },
  "context": { "destination": "support_bundle" },
  "scope": { "scope_type": "artifact_export", "risk_level": "medium" },
  "result": "allow",
  "reason_codes": ["export_allowed_with_redaction"],
  "obligations": [
    { "type": "redact_before_export", "classification": "personal_data" },
    { "type": "keep_audit_shape" }
  ]
}
```

## Flow

The exporter applies redaction, writes an export manifest, preserves ids and hashes, and links the export to evidence. The original artifact store remains the owner of bytes and versions.
