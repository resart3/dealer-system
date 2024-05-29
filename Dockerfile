FROM svr-ocp-nex-d01.muf.co.id:5000/base-img/nodejs:18.20.2-slim

# Create app directory
WORKDIR /usr/src/app

RUN chmod 755 /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .

#RUN npm install npm@7.24.0
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN chgrp -R 0 /usr/src/app && chmod -R g=u /usr/src/app
# RUN chmod -R g=u /usr/src/app

EXPOSE 3002

# CMD [ "npm", "install"]
# COPY timeline.js node_modules/@antv/g-base/lib/animate
# CMD [ "cp", "timeline.js", "node_modules/@antv/g-base/lib/animate"]
CMD [ "npm", "start"]