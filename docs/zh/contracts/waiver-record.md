---
title: Waiver record
description: 不隐藏原始策略决策的有界覆盖。
---


# Waiver Record

`waiver_record` 记录显式覆盖。当策略权威接受有边界的风险时使用。

每个 waiver SHOULD 包含 `waiver_id`、`decision_id`、原始 result 和 reason codes、`waived_by`、justification、scope、constraints、expiry、review requirement、linked grant/approval/evidence/incident refs。

Waiver 不能擦除 denied decision，必须让 runtime、evidence、audit 与后续 review 看到原始阻断和覆盖理由。
