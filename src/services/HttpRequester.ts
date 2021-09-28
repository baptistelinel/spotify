import request from "superagent";

const apiSpotifyUrl = "https://api.spotify.com/v1";

// Client id = ba89e08371ff47e5a272b2796c66d628
// Client secret = b601ea2dc98e488288a503542327c35c

const authApiToken =
  "BQDyJGmOrDiTWMUSZRX3wb_wbh0YparwQBq_MCBabyZZ_jPKz4JoDrZR1ka8MOrZwelLcfsRCM6zWIyZTrthz96ZoBciZlH15LwUts4iWr1dgzpIHajSSvieGBJuVTgva6vO3xIR4AhORtOctaZJZT2ifkehbxK5-Ke2TNGpsv7-SN-I";

export const httpGet = (endpoint: string) => {
  return request
    .get(`${apiSpotifyUrl}${endpoint}`)
    .set("Authorization", `Bearer ${authApiToken}`)
    .set("Accept", "application/json");
};
