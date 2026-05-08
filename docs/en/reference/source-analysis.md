---
title: Source analysis
description: Analysis distilled from policy engines, authorization standards, and agent runtime patterns.
---

# Source Analysis

Agent Policy exists because agent products combine policy concerns that older single-purpose systems keep separate.

## What existing standards already solve

Policy engines show that rule evaluation should be decoupled from enforcement and that decisions can be structured data, not only yes/no. Authorization languages show why subject, action, resource, and context are stable axes. Access-control standards show the value of explicit permit, deny, not-applicable, and indeterminate outcomes. Identity protocols show that grants and scopes are important, but they are not enough to describe a specific agent action. Event and telemetry standards show how policy facts should correlate with runtime traces without becoming the trace backend.

## What agent systems add

Agent systems add loops, tools, models, artifacts, memory, knowledge retrieval, delegated work, and human approval. A policy decision may need to pause a turn, create an approval request, restrict a tool parameter, select a model, redact an export, record a waiver, or require a remote agent to return evidence refs.

That shape is broader than classic API authorization and narrower than a full governance suite. Agent Policy keeps the agent-specific decision facts portable while allowing existing engines and identity systems to remain authoritative for their domains.

## Design conclusions

1. Use a PARC-like input model so policy decisions are easy to map to existing engines.
2. Treat `ask`, `defer`, and `escalate` as first-class results because agents often pause rather than simply allow or deny.
3. Separate approval requests from permission grants; a prompt is not a durable capability.
4. Separate waivers from decisions; an override must not erase the original block.
5. Put redaction and retention in obligations so exporters, UI, memory, and evidence can enforce the same rule.
6. Keep traces compact and reference-heavy; private payloads stay in owning systems.
7. Make `indeterminate` fail closed by default because agent systems often operate across incomplete context.
