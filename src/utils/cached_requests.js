import axios from 'axios';
import cache from 'memory-cache';

export function cachedRequest(url) {
  return new Promise((resolve, reject) => {
    console.log(cache);
    let cachedResponse = cache.get(url);

    if (cachedResponse) {
      resolve(cachedResponse);
    } else {
      const response = axios.get(url);
      response
        .then((json) => {
          if (json.status !== 200) {
            reject({'statusCode': json.status});
          } else {
            cache.put(url, json.data, 60*1000);
            resolve(json.data);
          }
        })
        .catch((json) => {
          reject(json);
        });
    }

  });
}
