<h1>Trybers and Dragons da Trybe</h1>

Trybers and Dragons da Trybe
Este projeto tem como objetivo utilizar a arquitetura SOLID juntamente com os princípios da POO para desenvolver um jogo no estilo Dungeons & Dragons de interpretação de papéis (role play), também conhecido como RPG.

<h1> Tecnologias Utilizadas </h1>

<h3>Este projeto foi desenvolvido com as seguintes tecnologias:</h3>

+ **Docker**, para a conteinerização da aplicação;
+ **ESLint**, para padronização e correção do código;
+ **Git**, para versionamento;
+ **VS Code**, para edição do código;
+ **SOLID**, para arquitetura e organização do código realizado em paradigma POO;
+ **Node.js**, para execução de testes e instalação de pacotes de bibliotecas;
+ **TypeScript**, para tipagem da linguagem.

<h1>Como usar</h1>

**Para utilizar o repositório no desenvolvimento, siga os passos abaixo:**
```
 1 - Clone o repositório:
git clone https://github.com/RaphaelPach/Trybe-and-Dragons.git

 2 - Instale as dependências:
npm install

 3 - Inicie o Docker Compose:
docker-compose up -d

 4 - Abra uma linha de comando dentro do container:
docker exec -it trybers_and_dragon bash

 5 - Instale as dependências dentro do contâiner:
npm install
```

<h1> Instanciando Personagens </h1>

Personagens do tipo Character podem ser criados e têm os métodos de **levelUp** e **attack**.

```
const personagem = new Character('nome genérico');
personagem.levelUp;
personagem.attack(OtherCharacterOrMonster);
```

<h1> Instanciando Monstros </h1>

Monstros podem ser criados. Em especial, há o monstro do tipo **kingLizard**, ambos possuem o método **attack**.
```
const monster = new Monster();
const kingLizard = new LizardKing();
monster.attack(personagem);
dragon.attack(personagem);
```

<h1>Batalhas de RPG</h1>
<h4>Batalha PVP (Player contra Player)</h4>

Com dois personagens do tipo **Character** criados, é possível criar uma batalha entre os dois. Para saber o vencedor, basta utilizar o método **fight**. Se o primeiro personagem adicionado ganhar, será retornado 1, se o segundo personagem ganhar, será retornado -1.

Obs: você pode aumentar o nível dos personagens antes da batalha usando o método **levelUp**:
```
const batalhaPvp = new PVP(personagem1, personagem2);
console.log(batalhaPvp.fight()); // 1 ou -1
```

<h1>Batalha PVE (Player contra "Environment")</h1>
Na batalha PVE, você pode colocar um personagem para lutar com um grupo (array) de inimigos de sua escolha (outros personagens, monstros e dragões). Para descobrir o lado vitorioso, basta utilizar o método **fight** na batalha, que retornará 1 se o personagem ganhar e -1 se o grupo ganhar.

Obs: você pode aumentar o nível dos personagens antes da batalha usando o método **levelUp**:
```
const batalhaPve = new PVE(personagem1, [personagem2, monster, dragon]);
console.log(batalhaPve.fight()); // 1 ou -
```
Criado por **Trybe** e desenvolvido por **Raphael Pacheco** https://www.linkedin.com/in/raphael-pacheco-597464229/




