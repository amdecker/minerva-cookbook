const RecipeCard = (props: any) => {
    return (
        <div style={{backgroundColor: "tan", width: "50%", height: "500px"}}>
            <h1>Recipe: {props.dishName}</h1>
            <div>
                This is a recipe.
            </div>
        </div>
    );
};

export default RecipeCard;