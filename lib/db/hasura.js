/* Helper function to fetch data from hasura backend */
export async function queryHasuraGQL(
  operationsDoc,
  operationName,
  variables,
  token
) {
  const result = await fetch(process.env.HASURA_ADMIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

/* Function to check if user exists based on issuer */
export async function isNewUser(issuer, token) {
  const operationsDoc = `
    query isNewUser($issuer: String!) {
      users(where: {issuer: {_eq: $issuer}}) {
        id
      }
    }`;

  const result = await queryHasuraGQL(
    operationsDoc,
    'isNewUser',
    { issuer },
    token
  );

  return result?.data?.users?.length === 0;
}

/* Helper function to create a new user */
export async function createNewUser({ issuer, email, publicAddress }, token) {
  const operationDoc = `
    mutation createNewUser($email:String!,$issuer:String!,$publicAddress:String!) {
      insert_users(objects: {email: $email, issuer: $issuer, publcAddress: $publicAddress}) {
        returning {
          email
          id
          issuer
          publcAddress
        }
      }
    }
  `;

  const result = await queryHasuraGQL(
    operationDoc,
    'createNewUser',
    { email, issuer, publicAddress },
    token
  );

  return result?.insert_users?.returning[0];
}
