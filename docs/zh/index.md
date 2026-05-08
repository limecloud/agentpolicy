---
layout: home
title: Agent Policy
titleTemplate: false
hero:
  name: Agent Policy
  text: 面向 Agent 系统的可移植策略决策标准。
  tagline: 统一描述 Agent 如何请求确认、获得授权、评估风险、保留数据、执行脱敏，并解释策略结果；不替代既有策略引擎。
  image:
    src: /logo.svg
    alt: Agent Policy logo
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: 什么是 Agent Policy
      link: /zh/what-is-agent-policy
    - theme: alt
      text: LLM 全量上下文
      link: ../llms-full.txt
features:
  - title: 策略决策
    details: 用稳定事实描述 allow、deny、ask、defer、escalate、waive、not_applicable、indeterminate。
  - title: 审批与授权
    details: 把 human approval、automated approval、permission grant 与运行时执行、UI 展示解耦。
  - title: 风险与数据控制
    details: 覆盖工具调用、模型调用、凭证、文件、网络、远程 Agent、Artifact 导出、保留与脱敏。
  - title: 可审计链路
    details: 每个决策都可追溯到 policy set、matched rules、inputs、obligations、waivers、grants、telemetry 与 evidence refs。
---

## 从这里开始

- [什么是 Agent Policy](what-is-agent-policy)
- [策略模型](concepts/policy-model)
- [最新规范](specification)
- [实现快速开始](authoring/quickstart)
- [JSON Schemas](reference/json-schemas)
