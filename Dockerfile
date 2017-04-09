FROM hub.c.163.com/library/node:latest

# Create app directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Bundle app source
COPY . /home/app
RUN npm install --production

ENV HTTP_PORT=8080
ENV NODE_ENV=production

ENV LOG_LEVEL=ALL
ENV LOG_FILE_DIRETORY=/var/log/jackyang.me/qiniu-service
ENV ACCESS_KEY=8RflFd93xHYRl6hFMJJ-dMeMaBiJtwfqj6lUt9qy
ENV SECRET_KEY=dCd4aLlp4o6SfOuRbuydGiZyin85KLM8-lzvXIge

EXPOSE 8080
CMD ["npm", "start"]
