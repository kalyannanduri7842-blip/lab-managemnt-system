# Multi-stage build for LABCARE Hospital Laboratory Management System
FROM node:20-alpine AS base

WORKDIR /app

# Copy root metadata and package manifests
COPY package.json ./
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Install backend dependencies
RUN cd backend && npm install --production

# Install frontend dependencies and build assets
RUN cd frontend && npm install && npm run build

# Copy full application source
COPY . .

EXPOSE 6005
EXPOSE 5175

ENV NODE_ENV=production
ENV PORT=6005

# Healthcheck definition
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:6005/api/health').then(r => r.ok ? process.exit(0) : process.exit(1)).catch(() => process.exit(1))"

CMD ["node", "index.js"]
