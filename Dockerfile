FROM oven/bun:1.1.3 as DEVELOPMENT
ENV NODE_ENV development

WORKDIR /app

COPY package.json .
COPY bun.lockb .
RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "run", "dev"]
