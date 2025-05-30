# 🛡️ Desafio de Código - Classe Heroi | DIO.me

Este projeto foi desenvolvido como parte de um desafio prático proposto pela plataforma [DIO.me](https://dio.me), sob orientação do Tech Educator **Felipe Aguiar**.

## 📚 Descrição

O objetivo do desafio é criar uma **classe genérica de herói** em JavaScript que represente personagens de uma aventura. Cada herói possui as seguintes propriedades:

- `name` (nome do herói)
- `age` (idade do herói)
- `type` (tipo do herói: mago, guerreiro, monge ou ninja)

Além disso, a classe possui um método `attack()` que retorna uma mensagem personalizada baseada no tipo de herói e sua forma de ataque.

### 💥 Tipos e seus ataques

| Tipo      | Ataque             |
|-----------|--------------------|
| Mago      | Magia              |
| Guerreiro | Espada             |
| Monge     | Artes Marciais     |
| Ninja     | Shuriken           |

## 🧪 Exemplo de uso

```javascript
const heroi1 = new Heroi("Merlin", 150, "Mago");
heroi1.attack(); // O Mago atacou usando magia.
```

## 🚀 Tecnologias

- JavaScript
- Node.js