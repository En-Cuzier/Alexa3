FROM fusuf/whatsasena:latest

RUN git clone https://github.com/En-Cuzier/Alexa3 /root/Alexa3
WORKDIR /root/Alexa3/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
