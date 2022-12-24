# Stage 1 - Build the application
FROM node:16 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/
RUN npm install
COPY . /app
RUN npm run build

# Stage 2 - build the final image with nginx
FROM nginx:stable
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]