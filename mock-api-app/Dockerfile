# Dockerfile

# base image
FROM node:alpine

ENV SRC_FOLDER /usr/src

# create & set working directory
RUN mkdir -p $SRC_FOLDER
WORKDIR $SRC_FOLDER

# install dependencies
RUN npm install -g json-server@0.16.3

CMD json-server --watch db.json

EXPOSE 3000