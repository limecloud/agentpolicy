---
title: 调研来源
description: Agent Policy 草案使用的外部参考。
---

# 调研来源

Agent Policy v0.1.0 参考成熟的 policy、authorization、eventing、telemetry、AI governance 与 agent protocol 资料。这些资料影响标准形状，但不转移 Agent Policy 的语义所有权。

| Source | 对 Agent Policy 的启发 |
| --- | --- |
| [Open Policy Agent docs](https://www.openpolicyagent.org/docs/) | policy-as-code、结构化 input、结构化 decision output、decision 与 enforcement 解耦。 |
| [OPA policy language](https://www.openpolicyagent.org/docs/policy-language) | Rego 风格的策略评估与数据驱动 authoring。 |
| [OPA management bundles](https://www.openpolicyagent.org/docs/management-bundles) | 版本化 policy bundle 对 policy set 身份和分发的启发。 |
| [Cedar documentation](https://docs.cedarpolicy.com/) | principal、action、resource、context、entities、schema validation 与 authorization decisions。 |
| [Cedar authorization](https://docs.cedarpolicy.com/auth/authorization.html) | PARC request shape 与 permit/forbid evaluation model。 |
| [OASIS XACML 3.0](https://docs.oasis-open.org/xacml/3.0/xacml-3.0-core-spec-os-en.html) | PDP/PEP 分离，以及 Permit、Deny、NotApplicable、Indeterminate。 |
| [OAuth 2.0 RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) | token、grant、scope 作为相邻身份输入。 |
| [OAuth 2.0 Resource Indicators RFC 8707](https://www.rfc-editor.org/rfc/rfc8707) | resource-bound authorization request 对 constrained grant 的启发。 |
| [Model Context Protocol specification](https://modelcontextprotocol.io/specification) | tool、resource、prompt 与 authorization boundaries。 |
| [Agent2Agent Protocol](https://github.com/a2aproject/A2A) | peer agent tasks、messages、artifacts 与 handoff refs。 |
| [CloudEvents specification](https://github.com/cloudevents/spec/blob/main/cloudevents/spec.md) | portable event envelope。 |
| [OpenTelemetry GenAI semantic conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/) | model/agent operations 的 trace 与 span correlation。 |
| [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) | AI risk 的 governance-oriented vocabulary。 |
