# Spotify Playlist Downloader

Um projeto simples para baixar músicas de playlists do Spotify, extraindo os nomes das músicas e usando o `yt-dlp` para o download.

## Dependências

Antes de começar, você precisa instalar algumas dependências:

### Node.js

Certifique-se de ter o [Node.js](https://nodejs.org/en/download/) instalado em sua máquina. Você pode baixar a versão LTS recomendada para garantir a melhor estabilidade.

### yt-dlp

O `yt-dlp` é uma ferramenta poderosa para baixar vídeos e áudio de várias plataformas. Você pode encontrar mais informações e instruções de instalação no repositório oficial: [yt-dlp GitHub](https://github.com/yt-dlp/yt-dlp).

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/andrevitxr/spotify-playlist-downloader.git
   cd spotify-playlist-downloader

2. Inicialize o projeto e instale as dependências necessárias:

   ```bash
   npm init -y
   npm install dotenv child_process p-limit fs axios

 3. Crie um arquivo ``.env`` no diretorio do codigo e adicione suas keys do Spotify:

    ```bash
    SPOTIFY_CLIENT_ID=
    SPOTIFY_CLIENT_SECRET=

Certifique-se de preencher os valores das variáveis com suas keys do Spotify. Você pode obter essas informações criando um aplicativo no Spotify Developer Dashboard.

## Configurações

1. Playlist

Após todas as dependências estarem instaladas corretamente, no arquivo ``nomes.js`` na linha 7, insira a URL da sua playlist da qual você irá extrair os nomes das músicas.

    ```bash
    const playlistUrl = 'https://open.spotify.com/playlist/sua_playlist';

## Como executar

Para iniciar o código e extrair os nomes das músicas da sua playlist, siga os passos abaixo:

1. No terminal, execute o seguinte comando:

   ```bash
   node nomes.js

Após a execução, um arquivo .txt será gerado no diretório do projeto. Nesse arquivo, você encontrará o nome de todas as músicas da sua playlist e seus respectivos artistas.

2. Agora para baixar todas as musicas, no terminal o seguinte comando

   ```bash
   node downloads.js

O script irá ler o arquivo ``tracks.txt`` que contém o nome de todas as músicas da sua playlist. Em seguida, ele baixará automaticamente todas as músicas e as salvará em uma pasta chamada ``Downloads``, que será criada no diretório do projeto.

## Estrutura do projeto

├── downloads/ # Pasta onde as músicas serão salvas
├── node_modules/ # Pasta contendo as dependências do projeto 
├── .env # Arquivo com as credenciais do Spotify 
├── downloads.js # Script responsável pelo download das músicas 
├── nomes.js # Script para extrair os nomes das músicas da playlist 
└── tracks.txt # Arquivo gerado pelo nomes.js que da os nomes das músicas e artistas
├── package-lock.json # Arquivo gerado automaticamente para controlar as versões das dependências 
├── package.json # Arquivo de configuração do projeto Node.js 
