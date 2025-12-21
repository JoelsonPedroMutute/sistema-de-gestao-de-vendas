# 1. Imagem base
FROM node:20-alpine

# 2. Diretório de trabalho dentro do container
WORKDIR /app

# 3. Copiar apenas os arquivos de dependência
COPY package*.json ./

# 4. Instalar dependências
RUN npm install

# 5. Copiar o restante do projeto
COPY . .

# 6. Expor a porta da API
EXPOSE 3000

# 7. Comando para iniciar a API
CMD ["npm", "run", "dev"]
