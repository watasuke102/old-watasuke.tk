FROM node:15.14.0

WORKDIR /gatsby

COPY package*.json ./
RUN npm i
COPY src ./src
COPY tsconfig.json ./
COPY gatsby*.js ./
EXPOSE 8000

ENTRYPOINT ["npm", "start"]
