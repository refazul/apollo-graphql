FROM node:17
WORKDIR /app/server
COPY server/package.json /app/server/package.json
RUN npm install

COPY server/src/* /app/server/src/
COPY server/src/datasources* /app/server/src/datasources/
EXPOSE 4000
CMD [ "node", "src/index.js" ]

# docker build . -t refazul/apollo-graphql
# docker run -dit -p 8000:4000 --name test --env-file server\.env refazul/apollo-graphql
# docker image prune