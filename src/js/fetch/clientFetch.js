import { createClient } from "pexels";

async function pexelsFetch(key, search, perPage, create, place) {
  const client = createClient(key);
  let data = await client.photos.search({ query: search, per_page: perPage });
  const images = create(data.photos);
  place.before(...images);
  // client.photos.search({ query: search, per_page: perPage }).then((photos) => {
  // const images = create(photos.photos);
  // place.before(...images);
  // console.log(photos.photos);
  // });
}

export default pexelsFetch;
