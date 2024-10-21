import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';
import pLimit from 'p-limit';
import { fileURLToPath } from 'url';

// Definindo __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para garantir que a pasta de downloads existe
const ensureDownloadsDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Função para baixar a música (com promessa)
const downloadMusic = (searchTerm, downloadDir) => {
  return new Promise((resolve, reject) => {
    const command = `yt-dlp -x --audio-format mp3 -o "${path.join(downloadDir, '%(title)s.%(ext)s')}" "ytsearch:${searchTerm}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao baixar a música "${searchTerm}": ${stderr}`);
        reject(error);
        return;
      }
      console.log(`Música baixada: "${searchTerm}" - ${stdout}`);
      resolve();
    });
  });
};

// Função principal
const main = async () => {
  const musicasFile = 'tracks.txt';
  const downloadDir = path.join(__dirname, 'downloads');
  const limit = pLimit(5); // Ajuste o número de downloads simultâneos aqui

  ensureDownloadsDir(downloadDir);

  // Lê as músicas do arquivo
  fs.readFile(musicasFile, 'utf8', async (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo de músicas:', err);
      return;
    }

    const musicas = data.split('\n').filter(Boolean); // Divide por linhas e remove vazias

    // Mapeia as promessas com limite de concorrência
    const downloadPromises = musicas.map((searchTerm) => {
      console.log(`Iniciando o download da música: "${searchTerm}"`);
      return limit(() => downloadMusic(searchTerm, downloadDir)); // Limita downloads simultâneos
    });

    try {
      await Promise.all(downloadPromises); // Aguarda todos os downloads
      console.log('Todos os downloads concluídos!');
    } catch (error) {
      console.error('Erro em um ou mais downloads:', error);
    }
  });
};

// Executa o programa
main();
