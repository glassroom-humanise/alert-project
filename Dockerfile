FROM node:18 AS build
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force && npm ci --force
COPY . .
RUN npm run build

FROM nginx:alpine
# Copiez le fichier de configuration nginx en utilisant un template
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY --from=build /app/dist/alert-project/browser /usr/share/nginx/html/

# Au démarrage du conteneur, remplacez le placeholder par la valeur de PORT et démarrez nginx
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"
EXPOSE 8080
