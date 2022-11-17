# Изображения

Не забываем сжать изображения перед подключением

Основной формат [Avif](https://avif.io).

Пример подключения:

```
    <picture>
        <source srcSet="image.avif" type="image/avif" />
        <source srcSet="image.webp" type="image/webp" />
        <img src="image.jpg" decoding="async" alt="" loading="lazy" />
    </picture>
```

Документация и [примеры](https://avif.io/blog/tutorials/html/).

Останые форматы как webp / jpeg / jpg / png [сжимаем здесь](https://squoosh.app/).
