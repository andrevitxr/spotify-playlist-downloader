require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const playlistUrl = 'https://open.spotify.com/playlist/0HWqmLRBcewC00DjMp8FLj?si=Jr6A57a6TjWT45BttjBJ7w&utm_source=copy-link&nd=1&dlsi=99e65a9a0b2346e6'; // Substitua pela URL da playlist

const getAccessToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', null, {
    params: {
      grant_type: 'client_credentials',
    },
    headers: {
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
  });
  return response.data.access_token;
};

const getPlaylistTracks = async (playlistId) => {
  const accessToken = await getAccessToken();
  const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
  return response.data.items;
};

const saveTracksToFile = (tracks) => {
  const trackNames = tracks.map(track => `${track.track.name} - ${track.track.artists.map(artist => artist.name).join(', ')}`).join('\n');
  fs.writeFileSync('tracks.txt', trackNames);
  console.log('Nomes das músicas e artistas salvos em tracks.txt');
};

const main = async () => {
  const playlistId = playlistUrl.split('/').pop().split('?')[0]; // Extrai o ID da playlist da URL
  const tracks = await getPlaylistTracks(playlistId);
  saveTracksToFile(tracks);
};

main().catch(console.error);
