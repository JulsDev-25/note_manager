FROM node:20.12.2

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install 

COPY . .

EXPOSE 5173

CMD ["yarn", "run", "dev", "--host"]
