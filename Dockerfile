# Imagen base ligera de Nginx
FROM nginx:alpine

# Copiar los archivos de la aplicación al directorio por defecto de Nginx
COPY . /usr/share/nginx/html

# Exponer el puerto 80 para el tráfico web
EXPOSE 80
