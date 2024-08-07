# Specify Node version and Image
FROM node:22.2.0 AS development

# Specify the working dir
WORKDIR /les/src/app

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm ci
RUN npm run build

EXPOSE 3000

FROM node:22.2.0 AS poduction

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /les/src/app

COPY --from=development /les/src/app .

EXPOSE 3000

CMD ["node", 'dist/main']