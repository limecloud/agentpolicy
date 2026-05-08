---
title: Research sources
description: External references used by the Agent Policy draft.
---

# Research Sources

Agent Policy v0.1.0 uses established policy, authorization, eventing, telemetry, AI governance, and agent protocol references. These references inform the shape of the standard; they do not transfer ownership of Agent Policy semantics.

| Source | What Agent Policy takes from it |
| --- | --- |
| [Open Policy Agent docs](https://www.openpolicyagent.org/docs/) | Policy-as-code, structured input, structured decision output, and decoupling decision from enforcement. |
| [OPA policy language](https://www.openpolicyagent.org/docs/policy-language) | Rego-style policy evaluation concepts and data-driven policy authoring. |
| [OPA management bundles](https://www.openpolicyagent.org/docs/management-bundles) | Versioned policy bundles as a reference for policy set identity and distribution. |
| [Cedar documentation](https://docs.cedarpolicy.com/) | Principal, action, resource, context, entities, schema validation, and authorization decisions. |
| [Cedar authorization](https://docs.cedarpolicy.com/auth/authorization.html) | PARC request shape and permit/forbid evaluation model. |
| [OASIS XACML 3.0](https://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-os-en.html) | PDP/PEP split and decision vocabulary such as Permit, Deny, NotApplicable, and Indeterminate. |
| [OAuth 2.0 RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) | Token, grant, and scope concepts as adjacent identity inputs. |
| [OAuth 2.0 Resource Indicators RFC 8707](https://www.rfc-editor.org/rfc/rfc8707) | Resource-bound authorization requests as a reference for constrained grants. |
| [Model Context Protocol specification](https://modelcontextprotocol.io/specification) | Tool, resource, prompt, and authorization boundaries for agent integrations. |
| [Agent2Agent Protocol](https://github.com/a2aproject/A2A) | Peer agent tasks, messages, artifacts, and handoff references. |
| [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | Portable event envelope design. |
| [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | Trace and span correlation for model and agent operations. |
| [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | Governance-oriented vocabulary for mapping, measuring, managing, and documenting AI risk. |
