---
title: 模型路由风险
description: 敏感模型选择的策略流示例。
---

# 模型路由风险

Planner 想把私有来源材料发送给外部模型。Policy 对外部模型候选返回 `deny`，reason code 为 `confidential_data_external_model_blocked`，并给出 advice：使用本地或私有模型候选。

Router 移除外部候选后，可对私有模型候选再次评估，并在目的与保留约束下返回 `allow`。
