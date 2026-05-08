---
title: Delegation and remote policy
description: Policy semantics for subagents, peer agents, and hosted runtimes.
---


# Delegation and Remote Policy

Agent systems increasingly delegate work to subagents, hosted runtimes, peer agents, and external services. Agent Policy gives these handoffs a common control model.

## Delegation facts

A delegation policy should state:

- who is delegating.
- who receives the delegated capability.
- which action and resource are allowed.
- whether the grant is transferable.
- which data classes may leave the origin boundary.
- which evidence, telemetry, and policy refs must be returned.
- what happens if the remote system cannot enforce an obligation.

## Remote enforcement

A remote system can enforce its own native policy. Agent Policy only requires that the handoff exports enough facts for the origin system to understand allow, deny, ask, escalation, grant, waiver, and trace results.

## Failures

If a remote system cannot prove enforcement of a required obligation, the origin runtime should treat the result as `defer`, `escalate`, or `indeterminate` rather than silently allowing the action.
