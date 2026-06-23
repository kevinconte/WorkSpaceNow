
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn, execSync } from 'node:child_process';

/**
 * Legge il file .env e carica le variabili d'ambiente nel processo.
 * Per ogni riga del file (es. DB_URL=jdbc:mysql://...),
 * separa la chiave dal valore e lo salva in process.env.
 * Ignora righe vuote e commenti (che iniziano con #).
 * Rimuove eventuali apici singoli o doppi attorno ai valori.
 */
function loadEnvFile(filePath) {
  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    const idx = line.indexOf('=');
    if (idx <= 0) continue;

    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

// Calcola il percorso della cartella backend e del file .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const backendDir = resolve(__dirname, '..');
const envFile = resolve(backendDir, '.env');

// Carica le variabili dal file .env
loadEnvFile(envFile);


if (process.platform === 'linux' && existsSync('/proc/sys/fs/binfmt_misc/WSLInterop')) {
  try {
    const gatewayIp = execSync("ip route show default | awk '{print $3}'", { encoding: 'utf8' }).trim();
    if (gatewayIp && process.env.DB_URL) {
      process.env.DB_URL = process.env.DB_URL.replace(
        /\/\/[^:/]+:(\d+)/,
        `//${gatewayIp}:$1`,
      );
      console.log(`[backend] WSL detected - using Windows host IP: ${gatewayIp}`);
    }
  } catch { /* non siamo su WSL o il comando ip non e' disponibile */ }
}


const args = ['-f', 'pom.xml', '-Dmaven.repo.local=../.m2/repository', 'spring-boot:run'];

const child = spawn('mvn', args, {
  cwd: backendDir,
  stdio: 'inherit',
  env: process.env,
});


child.on('exit', (code) => {
  process.exit(code ?? 1);
});


child.on('error', (err) => {
  console.error('[backend] Failed to start backend:', err.message);
  process.exit(1);
});
