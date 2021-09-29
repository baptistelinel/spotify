import request from "superagent";

const apiSpotifyUrl = "https://api.spotify.com/v1";

// Client id = ba89e08371ff47e5a272b2796c66d628
// Client secret = b601ea2dc98e488288a503542327c35c

const authApiToken = "Your Spotify Token here";

export const httpGet = (endpoint: string) => {
  return request
    .get(`${apiSpotifyUrl}${endpoint}`)
    .set("Authorization", `Bearer ${authApiToken}`)
    .set("Accept", "application/json");
};
