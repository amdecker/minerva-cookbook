export type RecipeData = {
    name: string,
    description: string,
    // prepTime: number,
    // cookTime: number,
    // recipeCategory: string, // e.g breakfast, lunch
    // recipeYield: string,
    recipeIngredientUS: string[],
    recipeIngredientMetric: string[],
    recipeInstructions: string[],
    image: string
}

type RecipeDatabase = {
    [key: string] : RecipeData
};

const recipeData: RecipeDatabase = {
    "chocolate-mousse": {
        "name": "Chocolate mousse",
        "image": "/images/chocolate-mousse.jpeg",
        "description": "A rich dark chocolatey delight.",
        "recipeIngredientUS": [
            "12oz dark/semisweet chocolate",
            "2 tbsp unsalted butter",
            "2 large eggs",
            "1.5-2 cups heavy cream",
            "1 tsp vanilla extract"
        ],
        "recipeIngredientMetric": [
            "340g dark/semisweet chocolate",
            "2 tbsp unsalted butter",
            "2 large eggs",
            "500ml heavy cream",
            "1 tsp vanilla extract"
        ],
        "recipeInstructions": [
            "Melt the chocolate and butter in microwave (0.5-2 mins)",
            "Whisk in eggs, make sure the chocolate is well stirred so there are no chunks left, set aside to cool",
            "Whip the chilled cream with the vanilla",
            "After the cream is whipped with stiff peaks, fold in the chocolate. Look up a video for how to fold chocolate mousse, or try to interpret this description: with a spatula, cut the cream & chocolate down the middle. Fold/scoop one side onto another. Turn the bowl pi/2 radians (a quarter circle) and cut and fold again. Be gentle. This is not aggressively mixing because you want to maintain the fluffiness.",
            "Serve cold with anything you want on top, extra whipped cream, mint, a bit of fruit."
        ]
    },
    "tea-eggs": {
        "name": "Tea eggs",
        "image": "/images/tea-eggs.jpg",
        "description": "A Taiwanese convenience store classic.",
        "recipeIngredientUS": [
            "6 tbsp soy sauce",
            "2 bay leaves",
            "1 tsp Sichuan peppercorns",
            "1 star anise",
            "1 inch cinnamon stick",
            "2 tsp salt",
            "2 black teabags (for color)",
            "6-12 eggs"
        ],
        "recipeIngredientMetric": [
            "6 tbsp soy sauce",
            "2 bay leaves",
            "1 tsp Sichuan peppercorns",
            "1 star anise",
            "1 inch cinnamon stick",
            "2 tsp salt",
            "2 black teabags (for color)",
            "6-12 eggs"
        ],
        "recipeInstructions": [
            "Mix the spices in a pot with water.",
            "Add the eggs and bring to a boil.",
            "Crack the eggs gently with a spoon to let the marinade reach the insides.",
            "Marinate for at least 24 hours in the fridge."
        ]
    }
};

export default recipeData;