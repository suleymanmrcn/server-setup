---
title: Container Temelleri
sidebar_position: 30
---

Container guvenligi, base image secimi ve guncelleme politikasini anlatir.

## Base Image Stratejisi
- Alpine gibi minimal base image kullan.
- Runtime versiyonunu sabitle (latest kullanma).
- CI icinde image scan calistir.

## Dockerfile Ornegi (Node)
```Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "server.js"]
```

## Guvenlik
- Rootless calistir.
- Gereksiz capability kapat.
- Read-only filesystem kullan.

## Guncelleme
- CVE cikinca rebuild.
- Eski image'lari sil.
