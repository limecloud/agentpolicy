---
title: Approval request
description: A portable request for human or delegated approval.
---


# Approval Request

`approval_request` is emitted when a policy decision requires human, automated, or delegated approval. It is not a UI component. It is the contract a UI can render and a runtime can wait on.

## Required fields

| Field | Meaning |
| --- | --- |
| `approval_id` | Stable approval id. |
| `decision_id` | Decision that caused the request. |
| `requested_action` | Action summary and structured parameters. |
| `required_approver` | User, role, group, service, peer, or policy authority. |
| `prompt` | Human-readable explanation and risk summary. |
| `choices` | Explicit possible responses. |
| `default_action` | Safe default if the request expires. |
| `status` | `pending`, `approved`, `denied`, `modified`, `expired`, or `escalated`. |
| `expires_at` | Expiry timestamp. |

## Choice design

Prefer explicit choices:

- `approve_once`
- `approve_for_scope`
- `deny`
- `modify`
- `escalate`
- `request_more_info`

High-risk approvals should include the exact command, tool, destination, resource, credential class, redaction state, and irreversible effect.

## Response facts

An approval response should preserve who responded, when, which choice was selected, what constraints changed, and which grant or waiver resulted. Do not overwrite the original approval request.
