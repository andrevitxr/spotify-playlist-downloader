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
   npm init - y
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
      const playlistUrl = 'http://link_da_sua_playlist_aqui';



