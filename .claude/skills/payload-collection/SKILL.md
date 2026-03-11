# Skill: payload-collection

## Trigger
Use when creating or modifying a Payload CMS collection in `apps/cms/src/collections/`.
Always run `/gh-workflow` first to create the issue and branch.

## Namespace convention

Collections are namespaced by client site:

```
apps/cms/src/collections/
├── anchor/     → CoveragePlans, Testimonials, Agents, Claims, AnchorPages
├── veros/      → ClinicalTrials, Publications, PatientResources, VeroPages
├── ripple/     → Campaigns, Donations, DonorStories, RipplePages
└── shared/     → Media, Users
```

Collection slugs follow the same namespace:
- `anchor-coverage-plans` (not just `coverage-plans`)
- `veros-clinical-trials`
- `ripple-campaigns`

## Collection file structure

```
apps/cms/src/collections/[site]/[CollectionName].ts
```

## Implementation template

```ts
import type { CollectionConfig } from "payload"

export const [CollectionName]: CollectionConfig = {
  slug: "[site]-[collection-name]",
  admin: {
    useAsTitle: "[field-name]",
    group: "[Site] — [Group Name]",  // groups collections in admin sidebar
  },
  access: {
    read: () => true,  // public read for frontend fetch
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    // fields go here
  ],
}
```

## Field type guide

```ts
// Text
{ name: "title", type: "text", required: true }

// Rich text (Lexical)
{ name: "content", type: "richText" }

// Image relationship
{ name: "image", type: "upload", relationTo: "media" }

// Relationship to another collection
{ name: "author", type: "relationship", relationTo: "users" }

// Select
{ name: "status", type: "select", options: ["draft", "published", "archived"], defaultValue: "draft" }

// Array (repeating group)
{ name: "features", type: "array", fields: [{ name: "text", type: "text" }] }

// Blocks (flexible content)
{ name: "layout", type: "blocks", blocks: [...] }

// Group (nested fields, no array)
{ name: "seo", type: "group", fields: [
  { name: "title", type: "text" },
  { name: "description", type: "textarea" },
]}

// Checkbox
{ name: "featured", type: "checkbox", defaultValue: false }

// Date
{ name: "publishedAt", type: "date", admin: { date: { pickerAppearance: "dayAndTime" } } }
```

## After creating the collection

### 1. Register in Payload config

```ts
// apps/cms/src/payload.config.ts
import { [CollectionName] } from "./collections/[site]/[CollectionName]"

export default buildConfig({
  collections: [
    // ...existing,
    [CollectionName],
  ],
})
```

### 2. Regenerate types

```bash
pnpm --filter=cms generate:types
```

This updates `packages/payload-types/src/types.ts` automatically.
Never edit generated types manually.

### 3. Verify in admin

Start the CMS locally and confirm:
- Collection appears in the admin sidebar under the correct group
- All fields render correctly
- Access control works (public read, authenticated write)

### 4. Update @vantage/payload-types

If `packages/payload-types/package.json` has a version, bump it with Changesets:
```bash
pnpm changeset
```

## Fetching from a Next.js app

```ts
// apps/anchor/src/lib/cms.ts
const response = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/anchor-coverage-plans`, {
  next: { revalidate: 3600 },  // ISR — revalidate every hour
})
const data = await response.json()
```

Use the generated types from `@vantage/payload-types` for type safety:
```ts
import type { AnchorCoveragePlan } from "@vantage/payload-types"
```

## Output

Report:
- Collection slug and file path
- Fields defined (name, type, required)
- Access control decisions
- Related types generated
- Any content modeling decisions made (e.g. why blocks vs array)
