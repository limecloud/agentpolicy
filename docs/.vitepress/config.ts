import { defineConfig } from 'vitepress'

const base = process.env.VITEPRESS_BASE || '/'

const enNav = [
  { text: 'Guide', link: '/en/what-is-agent-policy' },
  { text: 'Specification', link: '/en/specification' },
  { text: 'Examples', link: '/en/examples/tool-approval' },
  { text: 'Ecosystem', link: '/en/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/en/reference/json-schemas' },
  {
    text: 'Version',
    items: [
      { text: 'latest', link: '/en/specification' },
      { text: 'v0.1.4 overview', link: '/en/versions/v0.1.4/overview' },
      { text: 'v0.1.4 specification', link: '/en/versions/v0.1.4/specification' },
      { text: 'v0.1.4 changelog', link: '/en/versions/v0.1.4/changelog' },
      { text: 'v0.1.3 overview', link: '/en/versions/v0.1.3/overview' },
      { text: 'v0.1.3 specification', link: '/en/versions/v0.1.3/specification' },
      { text: 'v0.1.3 changelog', link: '/en/versions/v0.1.3/changelog' },
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
      { text: 'v0.1.2', link: '/en/versions/v0.1.2/specification' },
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
    { text: 'v0.1.2 specification', link: '/en/versions/v0.1.2/specification' },
    { text: 'v0.1.2 changelog', link: '/en/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
      { text: 'v0.1.1 specification', link: '/en/versions/v0.1.1/specification' },
      { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/en/versions/v0.1.0/specification' }
    ]
  }
]

const zhNav = [
  { text: '指南', link: '/zh/what-is-agent-policy' },
  { text: '规范', link: '/zh/specification' },
  { text: '示例', link: '/zh/examples/tool-approval' },
  { text: '生态', link: '/zh/reference/agent-ecosystem' },
  { text: 'Schemas', link: '/zh/reference/json-schemas' },
  {
    text: '版本',
    items: [
      { text: 'latest', link: '/zh/specification' },
      { text: 'v0.1.4 概览', link: '/zh/versions/v0.1.4/overview' },
      { text: 'v0.1.4 规范', link: '/zh/versions/v0.1.4/specification' },
      { text: 'v0.1.4 变更记录', link: '/zh/versions/v0.1.4/changelog' },
      { text: 'v0.1.3 概览', link: '/zh/versions/v0.1.3/overview' },
      { text: 'v0.1.3 规范', link: '/zh/versions/v0.1.3/specification' },
      { text: 'v0.1.3 变更记录', link: '/zh/versions/v0.1.3/changelog' },
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
      { text: 'v0.1.2', link: '/zh/versions/v0.1.2/specification' },
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
    { text: 'v0.1.2 规范', link: '/zh/versions/v0.1.2/specification' },
    { text: 'v0.1.2 变更记录', link: '/zh/versions/v0.1.2/changelog' },
    { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
      { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
      { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0', link: '/zh/versions/v0.1.0/specification' }
    ]
  }
]

const enSidebar = [
  { text: 'Start here', items: [
    { text: 'Overview', link: '/en/' },
    { text: 'What is Agent Policy?', link: '/en/what-is-agent-policy' },
    { text: 'Policy model', link: '/en/concepts/policy-model' },
    { text: 'Specification', link: '/en/specification' }
  ]},
  { text: 'Contracts', items: [
    { text: 'Policy decision', link: '/en/contracts/policy-decision' },
    { text: 'Risk scope', link: '/en/contracts/risk-scope' },
    { text: 'Approval request', link: '/en/contracts/approval-request' },
    { text: 'Permission grant', link: '/en/contracts/permission-grant' },
    { text: 'Redaction and retention', link: '/en/contracts/redaction-retention' },
    { text: 'Waiver record', link: '/en/contracts/waiver-record' },
    { text: 'Policy trace', link: '/en/contracts/policy-trace' },
    { text: 'Delegation and remote policy', link: '/en/contracts/delegation-and-remote-policy' },
    { text: 'Interoperability', link: '/en/contracts/interoperability' }
  ]},
  { text: 'For implementors', items: [
    { text: 'Implementation quickstart', link: '/en/authoring/quickstart' },
    { text: 'Acceptance scenarios', link: '/en/authoring/acceptance-scenarios' },
    { text: 'Runtime profile test cases', link: '/en/authoring/runtime-profile-test-cases' }
  ]},
  { text: 'Reference', items: [
    { text: 'Glossary', link: '/en/reference/glossary' },
    { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
    { text: 'Ecosystem boundaries', link: '/en/reference/ecosystem-boundaries' },
    { text: 'Research sources', link: '/en/reference/research-sources' },
    { text: 'Source analysis', link: '/en/reference/source-analysis' }
  ]},
  { text: 'Examples', items: [
    { text: 'Tool approval', link: '/en/examples/tool-approval' },
    { text: 'Artifact export policy', link: '/en/examples/artifact-export-policy' },
    { text: 'Model routing risk', link: '/en/examples/model-routing-risk' }
  ]},
  { text: 'Versions', items: [
    { text: 'v0.1.4 overview', link: '/en/versions/v0.1.4/overview' },
    { text: 'v0.1.4 specification', link: '/en/versions/v0.1.4/specification' },
    { text: 'v0.1.4 changelog', link: '/en/versions/v0.1.4/changelog' },
    { text: 'v0.1.3 overview', link: '/en/versions/v0.1.3/overview' },
    { text: 'v0.1.3 specification', link: '/en/versions/v0.1.3/specification' },
    { text: 'v0.1.3 changelog', link: '/en/versions/v0.1.3/changelog' },
    { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
    { text: 'v0.1.0 specification', link: '/en/versions/v0.1.0/specification' },
    { text: 'v0.1.0 changelog', link: '/en/versions/v0.1.0/changelog' }
  ]}
]

const zhSidebar = [
  { text: '开始', items: [
    { text: '概览', link: '/zh/' },
    { text: '什么是 Agent Policy', link: '/zh/what-is-agent-policy' },
    { text: '策略模型', link: '/zh/concepts/policy-model' },
    { text: '规范', link: '/zh/specification' }
  ]},
  { text: '契约', items: [
    { text: 'Policy decision', link: '/zh/contracts/policy-decision' },
    { text: 'Risk scope', link: '/zh/contracts/risk-scope' },
    { text: 'Approval request', link: '/zh/contracts/approval-request' },
    { text: 'Permission grant', link: '/zh/contracts/permission-grant' },
    { text: 'Redaction 与 retention', link: '/zh/contracts/redaction-retention' },
    { text: 'Waiver record', link: '/zh/contracts/waiver-record' },
    { text: 'Policy trace', link: '/zh/contracts/policy-trace' },
    { text: 'Delegation 与 remote policy', link: '/zh/contracts/delegation-and-remote-policy' },
    { text: 'Interoperability', link: '/zh/contracts/interoperability' }
  ]},
  { text: '实现者', items: [
    { text: '快速开始', link: '/zh/authoring/quickstart' },
    { text: '验收场景', link: '/zh/authoring/acceptance-scenarios' },
    { text: 'Runtime Profile 测试用例', link: '/zh/authoring/runtime-profile-test-cases' }
  ]},
  { text: '参考', items: [
    { text: '术语表', link: '/zh/reference/glossary' },
    { text: 'Agent 标准生态', link: '/zh/reference/agent-ecosystem' },
    { text: 'JSON Schemas', link: '/zh/reference/json-schemas' },
    { text: '生态边界', link: '/zh/reference/ecosystem-boundaries' },
    { text: '调研来源', link: '/zh/reference/research-sources' },
    { text: '实现分析摘要', link: '/zh/reference/source-analysis' }
  ]},
  { text: '示例', items: [
    { text: '工具审批', link: '/zh/examples/tool-approval' },
    { text: 'Artifact 导出策略', link: '/zh/examples/artifact-export-policy' },
    { text: '模型路由风险', link: '/zh/examples/model-routing-risk' }
  ]},
  { text: '版本', items: [
    { text: 'v0.1.4 概览', link: '/zh/versions/v0.1.4/overview' },
    { text: 'v0.1.4 规范', link: '/zh/versions/v0.1.4/specification' },
    { text: 'v0.1.4 变更记录', link: '/zh/versions/v0.1.4/changelog' },
    { text: 'v0.1.3 概览', link: '/zh/versions/v0.1.3/overview' },
    { text: 'v0.1.3 规范', link: '/zh/versions/v0.1.3/specification' },
    { text: 'v0.1.3 变更记录', link: '/zh/versions/v0.1.3/changelog' },
    { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
    { text: 'v0.1.0 规范', link: '/zh/versions/v0.1.0/specification' },
    { text: 'v0.1.0 变更记录', link: '/zh/versions/v0.1.0/changelog' }
  ]}
]

export default defineConfig({
  base,
  title: 'Agent Policy',
  description: 'A portable standard for agent policy decisions, approvals, permissions, risk, retention, and audit traces.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'English', items: enNav },
      { text: '中文', items: zhNav }
    ],
    sidebar: { '/en/': enSidebar, '/zh/': zhSidebar },
    search: { provider: 'local' },
    footer: {
      message: 'Draft standard for portable agent policy decisions, approvals, permissions, risk, and audit traces.',
      copyright: 'Copyright © 2026'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
