# === Dockerfile Frontend TerrangaFood ===

# Image de base
FROM node:20-alpine

# Répertoire de travail
WORKDIR /app

# Copier les dépendances
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le code source
COPY . .

# Variable d'environnement pour l'URL de l'API
# (sera surchargée par docker-compose)
ENV NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Construire l'application Next.js
RUN npm run build

# Documenter le port
EXPOSE 3000

# Lancer en mode production
CMD ["npm", "start"]