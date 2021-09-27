import request from 'superagent';

const apiSpotifyUrl = 'https://api.spotify.com/v1';

// Client id = ba89e08371ff47e5a272b2796c66d628
// Client secret = b601ea2dc98e488288a503542327c35c

const authApiToken = 'BQA8tItp-8gfOG7744AhVnguRksgt_n2UzRWb0WSGNDIiMrEXngzDNRySSbdQrlV72Cxdys8BMyGL-7BjnNBTGc8sVTfEduZ1ErpACRA-MrNmSu8mk8PfhYgQRqPZXUfsvDHBvKg0qs5V4OT7pFkoyWgNswo9108U-LvZLGmhVzAkFs1';

export const httpGet = (endpoint: string) => {
    return request.get(`${apiSpotifyUrl}${endpoint}`)
    .set('Authorization', `Bearer ${authApiToken}`)
    .set('Accept', 'application/json')
}