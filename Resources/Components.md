# Components

Não utilizamos componentes prontos no Tailwind, mas podemos criar classes css especificas para customizar uma **tag** html.

```html
    <button>Click here!</button>
```


**@layer** - Servem para agrupar estilos dentro de um grupo. Elas permitem organizar o código e evitar sobreposição de estilos, além de outras coisas.


```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer components {

        .btn-blue {
            @apply bg-blue-500 text-white;
        }

        .btn-blue:hover {
            @apply bg-red;
        }
    }
```