---
title: 工具审批
description: 高风险工具调用的策略流示例。
---

# 工具审批

Runtime 想在 workspace 中执行 shell 命令。Policy 返回 `ask`，并要求 workspace sandbox 与参数限制。

## Flow

1. Runtime 收到 `ask` 并暂停执行。
2. UI 展示 approval request，包含命令预览、sandbox 和风险原因。
3. 用户选择 `approve_once`。
4. Policy 层发出 session-scoped permission grant。
5. Runtime 在 sandbox 内执行。
6. Evidence 记录 decision、approval、grant、tool call 与 trace refs。
