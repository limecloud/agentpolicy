---
title: Waiver record
description: Bounded overrides without hiding the original policy decision.
---


# Waiver Record

`waiver_record` documents an explicit override. It is used when a policy authority accepts a bounded risk that would otherwise block work.

## Waiver requirements

Every waiver SHOULD include:

- `waiver_id`
- `decision_id`
- original result and reason codes.
- `waived_by` and authority type.
- justification.
- scope and constraints.
- expiry.
- review requirement.
- linked grant, approval, evidence, and incident refs when available.

## Non-goals

A waiver is not a way to erase denied decisions. It must preserve the original decision and make the override visible to runtime, evidence, audit, and later review.
