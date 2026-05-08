---
title: Policy trace
description: 策略决策及其输入的关联图。
---


# Policy Trace

`policy_trace` 让后续系统理解一个策略决策如何产生。它连接 input refs、engine refs、policy set、matched rules、decision、approval、grant、waiver、runtime events、telemetry 与 evidence。

Trace 应保持 compact。不要在 trace 中保存 secrets、私有 prompts、完整 tool outputs 或完整 policy inputs，除非已确认可导出；优先保存 refs 与 hashes。
