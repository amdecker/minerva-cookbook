import React from "react";
import { RecipeData } from "../recipeData";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../../loader";


const RecipeCard = (props: RecipeData) => {
    return (
        <div className="rounded shadow-lg bg-stone-300 p-4 sm:w-2/3 lg:w-1/2 overflow-auto h-fit">
            <div className="text-stone-700">
                <Link href="/"> {"< Back"} </Link>
            </div>
            <div className="mx-auto pt-4 w-1/2">
                <Image 
                src={props.image} 
                alt={props.name} 
                width={1000} 
                height={1000} 
                className="rounded-full"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-stone-900">{props.name}</div>
                <p className="text-stone-700 text-base">
                    {props.description}
                </p>
            </div>
            <div className="px-6 py-4  text-stone-700">
                <div className="font-bold text-l mb-2 text-stone-900">Ingredients</div>
                <ul className="list-disc px-8">
                    {props.recipeIngredientMetric.map(ingredient => <li>{ingredient}</li>)}
                </ul>
            </div>

            <div className="px-6 py-4  text-stone-700">
                <div className="font-bold text-l mb-2 text-stone-900">Instructions</div>
                <ul className="list-none px-8">
                    {props.recipeInstructions.map(instruction => <li className="pb-1">{instruction}</li>)}
                </ul>
            </div>

        </div>

    );
};

export default RecipeCard;