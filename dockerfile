FROM --platform=linux/amd64 node:18

# Create app directory
WORKDIR /usr/src/app

RUN git clone --depth 1 -b tva-tv-passport git@github.com:jimmyfortinx/epg.git .

RUN npm install -g concurrently
RUN npm install
RUN npm install node-cron
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY run.sh run.sh
COPY cron.js cron.js

EXPOSE 3000
CMD [ "bash", "./run.sh" ]