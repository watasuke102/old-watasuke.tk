FROM node:15.14.0

WORKDIR /gatsby
EXPOSE 8000

COPY . .
RUN npm i

ENTRYPOINT ["npm", "start"]
