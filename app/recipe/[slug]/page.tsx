import React from 'react';
import RecipeCard from "../components/RecipeCard";
import recipeData from '../recipeData';

// import { RecipeData } from '../recipeData';

const RecipePage = (params: any) => {
    console.log(params)
    return <RecipeCard {...recipeData[params.params.slug]}/>
};

export async function generateStaticParams() {
  const slugs: Object[] = [];
  Object.keys(recipeData).forEach(s => slugs.push({slug: s}))
  return slugs;
}

export default RecipePage;