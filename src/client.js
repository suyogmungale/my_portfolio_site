import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'swyc8oje',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skJ8iDsYE9YzPuZzcJEY9iNwxuTVh3rPyPi3xtfn1LVLw7Zbo9vxAE3ODQUPeDFLeDd4widr7I9O2JvEXxUd71saEnkaiYtJKb1KPqUeGPRdX5igYkueJU8dQORSO7Vh99yinKqWy4rceYKfgNi3y4QBfgWZPYvaPkx7T8bfoSBz7cCVcZZQ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
