---
title: Risk scope
description: Typed risk boundaries for agent actions.
---


# Risk Scope

`risk_scope` describes what kind of boundary the proposed action touches. It lets policy, UI, runtime, and evidence use the same language for risk.

## Scope types

| Scope type | Examples |
| --- | --- |
| `tool_call` | shell, browser, database, editor, network tool. |
| `model_call` | external model, local model, long context, high-cost model. |
| `artifact_export` | report, image, dataset, bundle, support package. |
| `source_access` | private docs, paid content, customer data, retrieval index. |
| `credential_use` | API key, OAuth token, SSH key, browser session. |
| `filesystem` | read, write, delete, move, bulk edit. |
| `network` | web fetch, webhook, remote API, production endpoint. |
| `remote_agent` | peer agent, delegated worker, hosted runtime. |
| `data_retention` | memory, logs, traces, evidence, cache. |
| `redaction` | display, export, training, support handoff. |
| `human_action` | sending email, submitting form, purchasing, publishing. |

## Risk level

Risk is not only about safety. It also covers reversibility, privacy, cost, compliance, trust boundary, operational blast radius, and user surprise.

| Level | Guidance |
| --- | --- |
| `low` | Usually safe to auto-allow with audit. |
| `medium` | Should be visible and constrained. |
| `high` | Usually needs approval, sandboxing, or a narrow grant. |
| `critical` | Needs explicit authority, review, and strong evidence. |
| `unknown` | Treat as blocked until facts improve. |

## Design note

Risk scope should be generated before a policy engine evaluates rules. This lets engines, UI, and evidence agree on the same risk classification even if they use different enforcement mechanisms.
