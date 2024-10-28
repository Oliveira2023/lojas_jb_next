// import { loadEnvConfig } from '@next/env'
import pkg from '@next/env';
const { loadEnvConfig } = pkg;
const projectDir = process.cwd();
const { combinedEnv } = loadEnvConfig(projectDir);
console.log('Loaded environment variables:', combinedEnv);
