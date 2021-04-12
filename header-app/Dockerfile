# Dockerfile

# base image
FROM node:alpine

ENV SRC_FOLDER /usr/src

# create & set working directory
RUN mkdir -p $SRC_FOLDER
WORKDIR $SRC_FOLDER

# install dependencies
RUN npm install react@17.0.1 react-dom@17.0.1
RUN npm install @emotion/react@11.1.5 @emotion/styled@11.1.5 styled-system@5.1.5
RUN npm install express@4.17.1

CMD npm run start:prod

EXPOSE 3000
