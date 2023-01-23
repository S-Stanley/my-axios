FROM node:19

COPY package.json .

RUN npm i

COPY server.ts .
RUN npx tsc server.ts

CMD node server.js