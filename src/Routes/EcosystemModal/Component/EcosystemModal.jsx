import React from 'react'
import { useLoaderData } from "react-router-dom";

import EcosystemModalContainer from '../Presentation/EcosystemModal'

function EcosystemModal  ()  {
  
  const { post } = useLoaderData();
  console.log('post', post, 'post');
  return <EcosystemModalContainer post={post} />

}

export default EcosystemModal

export const loaderPost = async ({ params }) => {
  const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await data.json();
  return { post };
};

