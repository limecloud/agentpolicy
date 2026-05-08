---
title: Model routing risk
description: Example policy flow for sensitive model selection.
---

# Model Routing Risk

A planner wants to send private source material to an external model.

## Decision

```json
{
  "schema_version": "0.1.0",
  "decision_id": "poldec_model_001",
  "policy_set_id": "model-routing-policy",
  "policy_version": "v1",
  "evaluated_at": "2026-05-08T10:10:00Z",
  "subject": { "type": "agent", "id": "planner_123" },
  "action": { "type": "model_call", "model_class": "external" },
  "resource": { "type": "source_collection", "id": "private_sources" },
  "context": { "data_classification": "confidential" },
  "scope": { "scope_type": "model_call", "risk_level": "high" },
  "result": "deny",
  "reason_codes": ["confidential_data_external_model_blocked"],
  "advice": [
    { "type": "alternative", "message": "Use a local or private model candidate." }
  ]
}
```

## Flow

The router removes external candidates and evaluates a private model candidate. A second decision may return `allow` with purpose and retention constraints.
