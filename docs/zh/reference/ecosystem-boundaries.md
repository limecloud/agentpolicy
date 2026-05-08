---
title: 生态边界
description: Agent Policy 拥有什么、不拥有什么。
---

# 生态边界

Agent Policy 是横切标准，接触很多系统，但不能吞掉它们。

| Boundary | 规则 |
| --- | --- |
| Runtime | Runtime 执行；Agent Policy 决策与解释。 |
| UI | UI 展示审批和风险；Agent Policy 定义审批契约。 |
| Evidence | Evidence 记录信任图；Agent Policy 提供决策事实。 |
| Knowledge | Knowledge 提供来源材料；Agent Policy 限制来源访问与 memory。 |
| Tool | Tool 暴露能力；Agent Policy 限制工具使用和参数。 |
| Artifact | Artifact 存储输出；Agent Policy 限制导出、脱敏与保留。 |
| Identity | Identity 认证 actor；Agent Policy 在上下文中评估 Agent 动作。 |

反模式：把 secrets 写入 trace；把 `not_applicable` 当 implicit allow；waiver 后隐藏 denial；只有 UI 文案没有机器可读 policy；把 token scope 当成具体 Agent 动作安全证明。
