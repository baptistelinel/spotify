import request from "superagent";

const apiSpotifyUrl = "https://api.spotify.com/v1";

// Client id = ba89e08371ff47e5a272b2796c66d628
// Client secret = b601ea2dc98e488288a503542327c35c

const authApiToken =
  "BQBzRChy8luDzNJEMoclB3f_cc6V38AE47sSI_BfEhnVbMXlSgOp1SVJ-NCstyRbQ62TmfWr4daA2U4dufnpyUHR5mgr9L7ZOwNyITp3506CinfQhVM6m2fvcMoUbA4UI7Kcu5U9bZnUcbNkkAMaUypHlNmTgzzrZIe27QNYlnCMABSQ";

export const httpGet = (endpoint: string) => {
  return request
    .get(`${apiSpotifyUrl}${endpoint}`)
    .set("Authorization", `Bearer ${authApiToken}`)
    .set("Accept", "application/json");
};
