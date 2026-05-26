const PATTERNS: Record<string, () => Promise<unknown>> = {
  'abstract-factory': () => import('./patterns/abstract-factory'),
  'factory-method': () => import('./patterns/factory-method'),
  builder: () => import('./patterns/builder'),
  prototype: () => import('./patterns/prototype'),
  singleton: () => import('./patterns/singleton'),
  adapter: () => import('./patterns/adapter'),
  bridge: () => import('./patterns/bridge'),
  composite: () => import('./patterns/composite'),
};

const printUsage = (): void => {
  console.log('Usage: npm start -- <pattern>\n');
  console.log('Available patterns:');
  
  for (const name of Object.keys(PATTERNS)) {
    console.log(`  - ${name}`);
  }
};

const main = async (): Promise<void> => {
  const patternName = process.argv[2];

  if (!patternName) {
    printUsage();
    process.exit(1);
  }

  const run = PATTERNS[patternName];

  if (!run) {
    console.error(`Unknown pattern: "${patternName}"\n`);
    printUsage();
    process.exit(1);
  }

  await run();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
