import RecipeCard from "../components/RecipeCard";

const RecipePage = (params: any) => {
    console.log(params)
    return <RecipeCard dishName={params.params.slug}/>
};

export async function generateStaticParams() {
    return [{ slug: "chocolate-mousse"}, {slug: "tea-eggs"}]
  }

export default RecipePage;