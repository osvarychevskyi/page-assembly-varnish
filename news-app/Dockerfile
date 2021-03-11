# Dockerfile

# base image
FROM node:alpine

ENV SRC_FOLDER /usr/src

# create & set working directory
RUN mkdir -p $SRC_FOLDER
WORKDIR $SRC_FOLDER

# copy source files
#COPY . /usr/src

# install dependencies
RUN npm install next@10.0.8 react@17.0.1 react-dom@17.0.1

CMD npm run build && npm run start -p 9002

EXPOSE 3000