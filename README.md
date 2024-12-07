# Brain Agricuture

projeto de API RESTful para gerenciamento de produtores rurais. Desenvolvido com Node.js e TypeScript, essa aplicação permite o cadastro, atualização, remoção e consulta de produtores rurais, com validação de CPF/CNPJ.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente de `<NodeJs | Docker>`
- Você tem uma máquina `<Windows / Linux / Mac>`.


## 🚀 Instalando <Docker>



## 🚀 Instalando <Brain_Agricuture>

Para instalar o <Brain_Agricuture>, siga estas etapas:


# Docker 🐋

Caso não tenha o Docker instalado...

Linux e macOS:

```
sudo apt update
sudo apt upgrade -y
```

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

```
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y
```

```
docker --version
```

# Docker-Compose 

Linux e macOS:

```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```
sudo chmod +x /usr/local/bin/docker-compose
```

```
sudo chmod +x /usr/local/bin/docker-compose
```

```
docker-compose --version
```

Windows:

# Docker 🐋
https://docs.docker.com/desktop/setup/install/windows-install/

# Docker-Compose 
https://docs.docker.com/compose/install/


## ☕ Usando <Brain_Agricuture>

Para usar <Brain_Agricuture>, siga estas etapas:

```
npm install 
```

```
docker-compose up -d
```

```
npm run start
```

Caso queira acessar a tabela do database dentro do container: 

```
docker exec -it postgres-container psql -U host -d brain-agricuture-db
```

## ⚙️ Exemple de .env

DB_HOST=localhost
DB_PORT=5432
DB_USER=host
DB_PASS=1234
DB_NAME=brain-agricuture-db
