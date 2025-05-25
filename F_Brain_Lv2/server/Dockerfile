FROM python:3.13

# Installer Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Ajouter poetry au PATH
ENV PATH="/root/.local/bin:$PATH"

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers du projet
COPY pyproject.toml poetry.lock* ./
RUN poetry install --no-root

COPY . .

# Exposer le port
EXPOSE 8000

CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
