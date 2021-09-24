import request from 'superagent';

const apiSpotifyUrl = 'https://api.spotify.com/v1';

// Client id = ba89e08371ff47e5a272b2796c66d628
// Client secret = b601ea2dc98e488288a503542327c35c

const authApiToken = 'BQDY9MewGs_fxjwYbTNWrYLt9XYBAHe3ZN4XhEeC30OoFCMD5OxrQpdsVqyAXNgBoloLDCHjwC_UvpmLQ433qnA5dMCyGHZIwbROpNT2d_sbtz08iqbNsSGCZIjgx0h8tlob4OqkTe5ulWsX1YU9wYEQuxbnIsF4IRAcP0UvMn5fq4yW';

export const httpGet = (endpoint: string) => {
    return request.get(`${apiSpotifyUrl}${endpoint}`)
    .set('Authorization', `Bearer ${authApiToken}`)
    .set('Accept', 'application/json')
}