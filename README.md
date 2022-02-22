# Trabajo-03-Completo

Pagina web funcionando: https://www.youtube.com/watch?v=8TALfBxZrLk

No logré hacer que Github Pages ni Azure corrieran Three.js por lo que me vi obligado a mostrar su funcionalidad en un video.

![image](https://user-images.githubusercontent.com/97976469/155207129-2276d825-6ad6-482b-a73c-91ee789b27a5.png)

Se importan la librerías de Three que se instalaron con NPM para hacer la página web.


![image](https://user-images.githubusercontent.com/97976469/155207217-fbb4a76e-5a98-4bb1-962a-185ec5af63a3.png)
 Se crean una escena y una camara que son las dos propiedas principales de una página hecha con Three.js, la camara es como lo ve el usuario
 y la escena es todo donde lo ve, como una escena de un teatro o una scene en Unity.
 
 ![image](https://user-images.githubusercontent.com/97976469/155207377-ea072ac0-371e-4fea-a333-cc818e1a3961.png)
Se agrega una luz a la escena para que los objetos que esten en ella se puedan ver.

![image](https://user-images.githubusercontent.com/97976469/155207510-23cd02c6-aa87-4445-b28c-514eda522a83.png)

Se crea una función en donde se crean diferentes formas geometricas esfericas y se les pone un material de color blanco, estas hacen
que se llene la pantalla de "estrellas" de manera aleatoria.

![image](https://user-images.githubusercontent.com/97976469/155207639-35a073f1-0239-44ba-91c0-9e2b6202548f.png)
Se carga una textura que en este caso es una imagen JPG del fondo y se le aplica a la propiedad background de la escena

![image](https://user-images.githubusercontent.com/97976469/155207714-20634dfb-b98d-45a5-bbc9-b545b21a1568.png)
El anillo, el cubo con la cara y el sol, se agregan de la misma manera, primero se crea el objeto en cuestion junto con la textura
que se les va a poner encima, que en cada caso es una imagen JPG, despues se le indica que se unan y se agregan a la escena.

![image](https://user-images.githubusercontent.com/97976469/155207889-00e33d16-80b0-4d8c-9956-018c0daf291c.png)

Cuando el usuario mueve el scroll de la pagina se manda a llamar la función anterior, esta altera las posiciones de la cara, el sol y la camara para que haya
un efecto de movimiento.

![image](https://user-images.githubusercontent.com/97976469/155207981-3ba90669-b5af-40b3-b27e-abf287ff3ddf.png)

Por ultimo se manda llamar la funcion animate que hace que se este recargando constantemente la pagina para que este el efecto de animación, es parecido a
la funcion loop en unity que se ejecuta cada frame.
