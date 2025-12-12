FROM oven/bun:1-alpine

WORKDIR /app

COPY . .

RUN bun install -g serve

EXPOSE 3000

ENTRYPOINT ["serve", "-s", ".", "-l", "3000"]
