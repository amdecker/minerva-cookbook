export type RecipeData = {
    name: string,
    description: string,
    // prepTime: number,
    // cookTime: number,
    // recipeCategory: string, // e.g breakfast, lunch
    // recipeYield: string,
    // recipeIngredientUS: string[],
    // recipeIngredientMetric: string[],
    // recipeInstructions: string[],
    image: string
}

type RecipeDatabase = {
    [key: string] : RecipeData
};

const recipeData: RecipeDatabase = {
    "chocolate-mousse": {
        "name": "Chocolate mousse",
        "image": "/images/chocolate-mousse.jpeg",
        "description": "A rich dark chocolatey delight."
    },
    "peanut-noodles": {
        "name": "Peanut noodles",
        "image": "/images/peanut-noodles.jpg",
        "description": "An easy weeknight dish."
    },
    "tea-eggs": {
        "name": "Tea eggs",
        "image": "/images/tea-eggs.jpg",
        "description": "A Taiwanese convenience store classic."
    }
};

export default recipeData;