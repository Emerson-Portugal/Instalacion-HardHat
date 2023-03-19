# Como empezar un Proyecto Desentralizado con HARDHAT

## Requisitos
- Node

## Instalacion

- Primero vamos a inicializar <b>Node</b>
```
npm init -y
```
- Vamos a instalar <b>Hardhat</b>
```
npm install --save-dev hardhat
```
- Vamos a inializar <b>Hardhat</b>
```
npx hardhat
```
- Vamos a intalar los modulos faltantes
```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```
```
npm install dotenv --save
```

## Pasos de Ejecucion de la Red

> Configuracion de la red en el archivo <b>hardhat.config.js</b>
```
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { API_URL, PRIVATE_KEY, MATIC_URL } = process.env;

module.exports = {
  solidity: "0.8.18",
  //configurar la red de Polygon
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    // Vamos agregar mas redes
    matic: {
      url: MATIC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

```

En el apartado de <b>networks</b>, vamos a ir agrenado las redes que vayamos a utilizar, solo necesitamos especificar el nombre <b>matic</b>, su URL de la red <b>url: MATIC_URL</b> y tu clave Privada <b>accounts: [`0x${PRIVATE_KEY}`]</b>
```
matic: {
  url: MATIC_URL,
  accounts: [`0x${PRIVATE_KEY}`],
},
```

- Compilar el Smart Contract
```
npx hardhat compile
```

Vamos a ejecutar el Script
- Red por Defecto
```
npx hardhat run .\scripts\deploy.js
```
- Red Polygon Mumbai
```
npx hardhat run .\scripts\deploy.js --network mumbai
```

- Red Polygon Matic
```
npx hardhat run .\scripts\deploy.js --network matic
```
