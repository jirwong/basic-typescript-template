import { afterEach, describe, expect, it, vi } from 'vitest';

const ORIGINAL_NODE_ENV = process.env.NODE_ENV;
const ORIGINAL_PORT = process.env.PORT;

function restoreEnv() {
  if (ORIGINAL_NODE_ENV === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = ORIGINAL_NODE_ENV;

  if (ORIGINAL_PORT === undefined) delete process.env.PORT;
  else process.env.PORT = ORIGINAL_PORT;
}

async function loadEnv() {
  vi.resetModules();
  const { env } = await import('./env.js');
  return env;
}

describe('env', () => {
  afterEach(() => {
    restoreEnv();
    vi.resetModules();
  });

  it('applies defaults when env vars are unset', async () => {
    delete process.env.NODE_ENV;
    delete process.env.PORT;

    const env = await loadEnv();
    expect(env.NODE_ENV).toBe('development');
    expect(env.PORT).toBe(3000);
  });

  it('reads NODE_ENV from the environment', async () => {
    process.env.NODE_ENV = 'production';

    const env = await loadEnv();
    expect(env.NODE_ENV).toBe('production');
  });

  it('rejects an invalid NODE_ENV', async () => {
    process.env.NODE_ENV = 'invalid';

    await expect(loadEnv()).rejects.toThrow();
  });

  it('coerces PORT to a number', async () => {
    process.env.PORT = '8080';

    const env = await loadEnv();
    expect(env.PORT).toBe(8080);
  });

  it('rejects a non-numeric PORT', async () => {
    process.env.PORT = 'not-a-port';

    await expect(loadEnv()).rejects.toThrow();
  });
});
