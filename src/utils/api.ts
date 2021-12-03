export const POST_GRAPHQL_FIELDS = `
  title
  preparationTime
  cookingTime
  publishDate
  heroImage {
    title
    url
  }
  slug
  equipment
  ingredients
  preparation
  instructions {
    json
  }
`;

export const getAllPosts = async (spaceId, accessToken) => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `query {
        blogPostCollection(order: publishDate_DESC) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
      }),
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return response?.data?.blogPostCollection?.items;
};

export const getPostBySlug = async (spaceId, accessToken, slug) => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `query {
        blogPostCollection(where: { slug: "${slug}" }, limit: 1) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
      }),
    }
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  const [post] = response?.data?.blogPostCollection?.items;
  return post;
};
