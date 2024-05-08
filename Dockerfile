# Используйте официальный образ Python
FROM python:3.12.2-slim

# Установите рабочую директорию внутри контейнера
WORKDIR .

# Копируйте файлы зависимостей в контейнер и установите зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копируйте остальные файлы проекта в контейнер
COPY . .

# Откройте порт, который будет использоваться вашим приложением
EXPOSE 8000

# Запустите ваше Django приложение
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "diploma.wsgi:application"]
