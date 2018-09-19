/*
  JavaScript tiene una función llamada `fetch()` que nos permite hacer llamadas
  a servidores (por ejemplo: APIs).

  `fetch(url[, options])`

  En el caso de que solo pasemos un argumento, la `url`, se entiende que la petición es
  de tipo GET. Usando `option`, podemos pasar un objeto de configuración que permite
  cambiar el tipo de petición, añadir un body, headers, y otras cosas. Puedes ver todas
  opciones de configuración en la documentación de `fetch()`:
  https://

  `fetch()` regresa una promesa con un objeto de tipo Response. Pare leer el contenido
  del Response llamamos `Response.json()` o `Response.text()`. Esto nos regresa otra
  promesa con el contenido en el formato deseado.

  Veamos una simple petición.
*/

export function getSubreddit(subredditId) {
  return fetch(`https://www.reddit.com/r/${subredditId}.json`)
    .then(response => response.json())
    .then(data => {
      const posts = data.data.children;
      return posts.map(post => post.data);
    })
    .then(posts => {
      return {
        id: subredditId,
        posts
      };
    });
}

// Esta función lo que hace es quitarle el `/` al final del postId
function normalizePostId(postId) {
  if (postId[postId.length - 1] !== "/") {
    return postId;
  }

  return postId.slice(0, -1);
}

export function getPost(subredditId, postId) {
  const normalizedPostId = normalizePostId(postId);

  return fetch(
    `https://www.reddit.com/r/${subredditId}/comments/${normalizedPostId}.json`
  )
    .then(response => response.json())
    .then(data => {
      const postData = data[0];
      const commentsData = data[1];

      return {
        ...postData.data.children[0].data,
        comments: commentsData.data.children.map(comment => comment.data)
      };
    });
}
