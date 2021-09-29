import request from "superagent";

const apiSpotifyUrl = "https://api.spotify.com/v1";

// Client id = ba89e08371ff47e5a272b2796c66d628
// Client secret = b601ea2dc98e488288a503542327c35c

const authApiToken =
  "BQCAYEJhNUV-rWpyRbJV86OyDMx_4-Jo6rZqDebG-e49tnvM_IGakNfw3luwvSnYGRc8ED-iUG7OnuWN2iVqUjXkE8MWOmd5eLv_6fB7RigyRGIeNxBXEsXUismTGbItrpUCLTLErIU7hBM4_jAi6EQCzDcJQPCwOsm1501gb5TBaiyA";

export const httpGet = (endpoint: string) => {
  return request
    .get(`${apiSpotifyUrl}${endpoint}`)
    .set("Authorization", `Bearer ${authApiToken}`)
    .set("Accept", "application/json");
};
