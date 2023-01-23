export {};

import http from 'node:http';

const my_axios = {
    get: (url: string) => {
        return new Promise((resolve) => {
            http.get(url, (resp) => {
                let data = '';
                resp.on('data', (packet) => {
                    data = data + packet;
                });
                resp.on('end', () => {
                    resolve(data);
                });
            })
        });
    }
};

export default my_axios;