FROM nodesource/jessie:5.7.0

ADD package.json package.json
RUN npm install
ADD . .
ENV NODE_ENV development
