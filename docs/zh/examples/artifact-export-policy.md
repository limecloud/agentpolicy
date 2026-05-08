---
title: Artifact 导出策略
description: 脱敏 Artifact 导出的策略流示例。
---

# Artifact 导出策略

用户导出包含敏感字段的报告 Artifact。Policy 返回 `allow`，但带 `redact_before_export` 和 `keep_audit_shape` obligations。

Exporter 执行脱敏，写入 export manifest，保留 ids 与 hashes，并把导出结果连接到 Evidence。原始 Artifact store 仍然拥有字节与版本。
