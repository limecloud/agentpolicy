---
title: Policy trace
description: Correlation graph for policy decisions and their inputs.
---


# Policy Trace

`policy_trace` lets later systems understand how a policy decision was produced. It links inputs, engines, rule refs, decisions, approvals, grants, waivers, runtime events, telemetry, and evidence.

## Trace contents

A trace SHOULD include:

- normalized input hash and input refs.
- policy engine type and version.
- policy set id, version, bundle digest, or schema id.
- matched rules and reason codes.
- decision ids and approval ids.
- grant ids and waiver ids.
- runtime event ids, task ids, turn ids, tool call ids, model call ids, and artifact ids.
- telemetry trace/span ids.
- evidence pack refs.

## Privacy

Do not store raw secrets, private prompts, full tool outputs, or complete policy inputs in a trace unless they are explicitly safe to export. Store refs and hashes instead.
