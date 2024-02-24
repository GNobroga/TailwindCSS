# Tailwind CSS

- O Tailwind não trabalha com componentes prontos

- Ele foca em classes utilitárias

- Ele é Mobile First, ou seja, as classes inicias são aplicáveis inclusivamente para mobile.

- Os breakpoints padrões são **sm**, **md**, **lg** e **xl**. 

## Plugins

O Tailwind permite definir plugins, adicionando classes dinamicamente, componentes com classes que se repetem muito. [Ver mais](./Resources/Plugins.md)

## Prefix

Possibilita de utilizar prefix pra não ocorrer override de classes.

## Fixed Values

**[]** - Utilizando valores dentro de colchetes é possível definir valores constantes além dos pré definidos pelo Tailwind.

```css
    .button {
        @apply w-[200px] shadow-xl rounded-full text-white;
    }
```


[Configurar o projeto para utilizar o Tailwind](/Resources/Configuration.md)

[Breakpoints](/Resources/Breakpoints.md)

[Pseudo Classes](/Resources/Pseudo-class.md)

