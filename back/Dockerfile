# Используем образ Node.js 
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем пакетные зависимости в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в рабочую директорию
COPY . .

# Устанавливаем среду выполнения
ENV NODE_ENV=production

EXPOSE 5000

# Запускаем приложение
CMD ["node", "index.js"]