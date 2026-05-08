---
title: Risk scope
description: Agent 动作触达的风险边界。
---


# Risk Scope

`risk_scope` 描述候选动作触达哪类风险边界，让 policy、UI、runtime、evidence 使用同一套风险语言。

## Scope types

`tool_call`、`model_call`、`artifact_export`、`source_access`、`credential_use`、`filesystem`、`network`、`remote_agent`、`data_retention`、`redaction`、`human_action`、`memory_write`、`task_delegation`、`ui_surface`、`cost_or_quota`。

## Risk levels

`low` 通常可自动允许并审计；`medium` 应可见且受约束；`high` 通常需要审批、沙箱或窄 grant；`critical` 需要明确权威和强 evidence；`unknown` 应先阻断。
