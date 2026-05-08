---
title: Approval request
description: 面向人或委托权威的审批请求。
---


# Approval Request

`approval_request` 在 policy decision 返回 `ask` 或 `escalate` 时产生。它不是 UI 组件，而是 UI 可渲染、Runtime 可等待的契约。

## 必填字段

`approval_id`、`decision_id`、`requested_action`、`required_approver`、`prompt`、`choices`、`default_action`、`status`、`created_at`、`expires_at`。

## Choice 设计

推荐使用 `approve_once`、`approve_for_scope`、`deny`、`modify`、`escalate`、`request_more_info`。高风险审批必须展示动作、资源、凭证类别、脱敏状态和不可逆影响。
