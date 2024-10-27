# Используем образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем пакетные зависимости
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Устанавливаем среду выполнения
ENV NODE_ENV=production

EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]