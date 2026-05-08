# Agent Policy

Agent Policy is a portable draft standard for agent policy decisions, approvals, permission grants, risk scopes, redaction, retention, waivers, and policy traces.

It interoperates with runtime, UI, evidence, knowledge, tool, artifact, identity, telemetry, and peer-agent systems without taking ownership of those systems. Policy engines can evaluate rules. Runtime enforces actions. UI renders approvals. Evidence records trust. Agent Policy defines the portable facts those systems exchange around agent decisions.

## What v0.1.0 defines

- Policy decisions with `allow`, `deny`, `ask`, `defer`, `escalate`, `waive`, `not_applicable`, and `indeterminate` results.
- Risk scopes for tools, models, artifacts, sources, credentials, filesystems, networks, memory, remote agents, and human actions.
- Approval requests and permission grants with constraints, expiry, provenance, revocation, and delegation boundaries.
- Redaction and retention obligations for display, export, memory, evidence, and peer handoff.
- Waiver records that preserve the original policy result.
- Policy traces linking inputs, policy sets, matched rules, decisions, approvals, grants, waivers, runtime, telemetry, and evidence refs.
- Public JSON Schemas and LLM-friendly `llms.txt` / `llms-full.txt` entrypoints.

## Documentation

- [Specification](docs/en/specification.md)
- [Policy model](docs/en/concepts/policy-model.md)
- [Policy decision](docs/en/contracts/policy-decision.md)
- [Risk scope](docs/en/contracts/risk-scope.md)
- [Approval request](docs/en/contracts/approval-request.md)
- [Permission grant](docs/en/contracts/permission-grant.md)
- [Waiver record](docs/en/contracts/waiver-record.md)
- [Policy trace](docs/en/contracts/policy-trace.md)
- [JSON Schemas](docs/en/reference/json-schemas.md)
- [Research sources](docs/en/reference/research-sources.md)
- [中文规范](docs/zh/specification.md)

## LLM entrypoints

- [`llms.txt`](llms.txt): concise navigation index for AI clients.
- [`llms-full.txt`](llms-full.txt): concatenated current English documentation with source URLs.
- [`llm.txt`](llm.txt) and [`llm-full.txt`](llm-full.txt): compatibility aliases.

## Related Agent standards

- [Agent Knowledge](https://limecloud.github.io/agentknowledge/) - source-grounded knowledge packs.
- [Agent UI](https://limecloud.github.io/agentui/) - interaction surfaces for agent products.
- [Agent Runtime](https://limecloud.github.io/agentruntime/) - execution facts, controls, tasks, tools, and recovery.
- [Agent Evidence](https://limecloud.github.io/agentevidence/) - evidence, provenance, verification, review, replay, and export.
- [Agent Policy](https://limecloud.github.io/agentpolicy/) - policy decisions, approvals, permissions, risk, retention, waivers, and traces.
- [Agent Artifact](https://limecloud.github.io/agentartifact/) - durable deliverables, versions, parts, previews, exports, and handoff packages.
- [Agent Tool](https://limecloud.github.io/agenttool/) - tool declarations, surfaces, invocations, progress, results, permissions, and audit refs.
- [Agent Context](https://limecloud.github.io/agentcontext/) - context surfaces, items, source refs, selection, budgets, assembly, injection, compaction, and missing-context facts.

See the [Agent standards ecosystem](docs/en/reference/agent-ecosystem.md) page for the mutual-link map and future standard candidates.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated at `docs/.vitepress/dist`.
