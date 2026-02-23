# Template Improvements

Suggested fixes and improvements for the basic-typescript template.

---

## 🔴 Critical

### 1. `pnpm-lock.yaml` is gitignored

`.gitignore` includes `pnpm-lock.yaml` on line 3, which prevents reproducible installs for anyone cloning the template. Lock files should be committed.

**Fix:** Remove `pnpm-lock.yaml` from `.gitignore`.

---

### 2. Missing `"type": "module"` in `package.json`

Config files (`eslint.config.js`, `prettier.config.js`) use `export default` (ESM syntax), and `tsconfig.json` sets `"module": "ES2020"`. Without `"type": "module"`, ESM handling is implicit.

**Fix:** Add `"type": "module"` to `package.json`.

---

### 3. Incomplete esbuild → tsx migration

The `package.json` scripts still reference esbuild (`build`, `dev`, `dev:watch`) but the intent was to switch to tsx.

**Fix:** Update scripts to use tsx:

- `build`: `tsx src/index.ts`
- `dev`: `tsx src/index.ts`
- `dev:watch`: `tsx watch src/index.ts`

Also update `CLAUDE.md` and `README.md` to remove esbuild references.

---

## 🟡 Should Fix

### 4. `"main": "index.js"` is a meaningless default

This is the default value from `npm init` and doesn't point to anything useful.

**Fix:** Remove the `"main"` field, or set it to `"dist/index.js"`.

---

### 5. tsconfig targets are conservative for Node 22

`"target": "ES2020"` and `"module": "ES2020"` don't take advantage of features Node 22 supports.

**Fix:** Update `tsconfig.json`:

```json
"target": "ES2023",
"module": "NodeNext",
"moduleResolution": "NodeNext"
```

---

### 6. `declaration` and `declarationMap` are unnecessary for an app template

These options generate `.d.ts` files, which are only useful for libraries being published — not for application templates.

**Fix:** Remove `"declaration": true` and `"declarationMap": true` from `tsconfig.json`.

---

### 7. Missing `engines` field in `package.json`

Node 22 is required but not enforced anywhere in `package.json`.

**Fix:** Add to `package.json`:

```json
"engines": { "node": ">=22.0.0" }
```

---

### 8. `es-toolkit` is an unused dependency

`es-toolkit` is listed in `dependencies` but is never imported in any source file.

**Fix:** Remove `es-toolkit` from `dependencies` and uninstall it:

```bash
pnpm remove es-toolkit
```

---

## 🟢 Minor / Nice-to-Have

### 9. Empty `description` in `package.json`

The `"description"` field is blank.

**Fix:** Set it to something like:

```json
"description": "A minimal TypeScript template for Node.js projects"
```

---

### 10. `.prettierignore` is referenced but doesn't exist

`CLAUDE.md` mentions `.prettierignore` but the file doesn't exist in the repo.

**Fix:** Either create a `.prettierignore` file (e.g. ignoring `dist/`, `node_modules/`) or remove the reference from `CLAUDE.md`.

---

### 11. `nodemon` may be unnecessary after tsx migration

Once the tsx migration is complete (`pnpm dev:watch` uses `tsx watch`), nodemon is no longer needed.

**Fix:** Remove `nodemon` from `devDependencies`:

```bash
pnpm remove nodemon
```

---

### 12. README and CLAUDE.md still list esbuild in tech stack

After completing the tsx migration, the tech stack sections in both docs still reference esbuild and nodemon.

**Fix:** Update `README.md` (line 76) and `CLAUDE.md` (lines 45, 51) to replace esbuild/nodemon with tsx.
