FROM node:22.14.0

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copie des dépendances uniquement pour optimisation du cache
COPY package.json yarn.lock ./

# Installation des dépendances
RUN yarn install

# Copie du reste du code
COPY . .

# Exposition du port par défaut de Vite
EXPOSE 5173

# Commande de démarrage
CMD ["yarn", "dev"]
