---
title: Redaction 与 retention
description: 附着在策略决策上的数据处理义务。
---


# Redaction 与 Retention

Agent Policy 可以携带数据转换和生命周期 obligations，但不拥有字节存储、UI 渲染或 Artifact 导出本身。

Redaction obligation 应描述 `classification`、`action`、`transform`、`export_scope` 与 `reason_code`。Retention obligation 应描述 payload 保留期、audit metadata 保留期、删除触发器、legal hold 或 review requirement、可导出类别。

安全系统可以删除私有 payload，同时保留 audit shape：ids、hashes、timestamps、reason codes、decision refs 与脱敏证明。
