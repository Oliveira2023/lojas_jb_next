import { loadEnvConfig } from '@next/env'
 
const projectDir = process.cwd()
loadEnvConfig(projectDir)

console.log('Loaded environment variables:', process.env.DB_NAME);