import React from "react";
import { RecipeData } from "../recipeData";
import Link from "next/link";
const RecipeCard = (props: RecipeData) => {
    return (
        <div className="max-w-xl rounded shadow-lg bg-stone-300 overflow-y-auto p-4">
            <div className="text-stone-700">
                <Link className="underline" href="/"> {"< Back"} </Link>
            </div>
            <div className="mx-auto w-1/2 pt-4 overflow-hidden">
                <img className="w-full rounded-full" src={props.image} alt="Image"/>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-stone-900">{props.name}</div>
                <p className="text-stone-700 text-base">
                    {props.description}
                </p>
            </div>
            </div>

    );
};

export default RecipeCard;