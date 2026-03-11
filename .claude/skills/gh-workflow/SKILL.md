# Skill: gh-workflow

## Trigger
Use this skill when starting any new task — feature, component, collection, bug fix, or docs.
This enforces the mandatory issue → branch → PR → merge workflow for every change.

## Instructions

### Step 1 — Create the issue

Determine the correct type prefix and label:
- `feat:` → label `feature` or `component` or `collection`
- `fix:` → label `bug`
- `chore:` → label `chore`
- `docs:` → label `adr` or `prd`

Determine the correct milestone:
- Foundation work → `Phase 1: Foundation`
- UI components → `Phase 2: @vantage/ui`
- Anchor work → `Phase 3: Anchor`
- Veros work → `Phase 4: Veros`
- Ripple work → `Phase 5: Ripple`

```bash
gh issue create \
  --title "[type]: [descriptive title]" \
  --label "[label],[phase:x]" \
  --milestone "[Phase N: Name]" \
  --body "[issue body with tasks checklist]"
```

Issue body must include:
- `## Overview` — what and why
- `## Tasks` — checklist of concrete steps
- `## Acceptance Criteria` — how to know it is done

### Step 2 — Create the branch

Branch name is derived from the issue title, slugified:
```bash
git checkout -b [type]/[slugified-issue-title]
```

Examples:
- `feat: Button component` → `feat/button-component`
- `fix: Quote form validation` → `fix/quote-form-validation`
- `chore: Turborepo setup` → `chore/turborepo-setup`

### Step 3 — Do the work

Follow the relevant skill for the type of task:
- Component → use `/component` skill
- Collection → use `/payload-collection` skill
- Story → use `/storybook-story` skill
- Test → use `/playwright-test` skill

### Step 4 — Commit

Stage specific files (never `git add .` blindly):
```bash
git add [specific files]
git commit -m "[type]: [description matching issue title]"
git push origin [branch-name]
```

### Step 5 — Open PR

```bash
gh pr create \
  --title "[type]: [same as issue title]" \
  --body "$(cat <<'EOF'
## Summary
[1-3 bullet points of what changed]

## Test plan
- [ ] [how to verify the change works]
- [ ] Storybook updated (if component)
- [ ] Types regenerated (if collection)
- [ ] A11y check passes

closes #[issue-number]
EOF
)"
```

The `closes #N` in the PR body auto-closes the issue on merge. Always include it.

### Step 6 — Merge

```bash
gh pr merge --squash --delete-branch
```

## Output

Report back:
- Issue URL
- Branch name
- PR URL (after creation)
- Confirmation that issue was auto-closed after merge
