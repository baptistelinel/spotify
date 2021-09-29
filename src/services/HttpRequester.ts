import request from "superagent";

const apiSpotifyUrl = "https://api.spotify.com/v1";

// Client id = ba89e08371ff47e5a272b2796c66d628
// Client secret = b601ea2dc98e488288a503542327c35c

const authApiToken =
  "BQAmmlo2w31ax9CFJKdNaZpom2xSWIdjpHCgpoPmwjTQlLK5VisA6TSIbLLE1SZ2r367Zs4OPDmk8Fqgj54sCOqapPiu3TvGEZq3Qg_RnqpsMQ5comd5415-j4Bgk20VVlINTf8TKWKWyUt0dZ9oNZjYxSH6PkFyyU4WTMCT8YlBhYpo";

export const httpGet = (endpoint: string) => {
  return request
    .get(`${apiSpotifyUrl}${endpoint}`)
    .set("Authorization", `Bearer ${authApiToken}`)
    .set("Accept", "application/json");
};
