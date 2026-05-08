---
title: Ecosystem boundaries
description: What Agent Policy owns and does not own.
---

# Ecosystem Boundaries

Agent Policy is a horizontal standard. It touches many systems but should not absorb them.

| Boundary | Rule |
| --- | --- |
| Runtime | Runtime enforces; Agent Policy decides and explains. |
| UI | UI renders approval and risk; Agent Policy defines the approval contract. |
| Evidence | Evidence records trust graph; Agent Policy supplies decision facts. |
| Knowledge | Knowledge supplies source material; Agent Policy can constrain source access and memory. |
| Tool | Tool systems expose capabilities; Agent Policy constrains tool use and parameters. |
| Artifact | Artifact systems store outputs; Agent Policy constrains export, redaction, and retention. |
| Identity | Identity authenticates actors; Agent Policy evaluates agent actions in context. |
| Observability | Telemetry records runtime behavior; Agent Policy emits traceable decisions and refs. |

## Anti-patterns

- Embedding full secret payloads in policy traces.
- Treating `not_applicable` as implicit allow.
- Hiding a denied decision after a waiver.
- Letting UI approval text become the only machine-readable policy record.
- Treating a token scope as proof that a specific agent action is safe.
- Duplicating artifact bytes, knowledge documents, or trace logs inside policy records.
