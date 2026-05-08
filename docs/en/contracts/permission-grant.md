---
title: Permission grant
description: Bounded permissions issued to agents, runtimes, tools, or delegated actors.
---


# Permission Grant

`permission_grant` records a narrow permission. It can be issued by a policy engine, human approval, delegated authority, session bootstrap, identity token, or admin rule.

## Grant constraints

A grant SHOULD include constraints for:

- allowed action and resource.
- parameter restrictions.
- trust boundary and tenant.
- session, thread, task, or run scope.
- max cost, time, count, or data volume.
- sandbox profile.
- redaction and retention obligations.
- expiry and revocation.

## Revocation

Grants are facts with lifecycle. A revoked grant should keep `grant_id`, `issued_at`, `revoked_at`, `revoked_by`, and `revocation_reason` so later traces can explain why a later action was blocked.

## Delegation

When a grant is delegated to a subagent or remote system, the grant must state whether it is transferable, which capabilities can be delegated, and which refs must be returned for audit.
