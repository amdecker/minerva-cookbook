import React from "react";
import { RecipeData } from "../recipeData";
import Link from "next/link";
import Image from "next/image";
import imageLoader from "../../loader";


const RecipeCard = (props: RecipeData) => {
    return (
        <div className="max-w-xl rounded shadow-lg bg-stone-300 overflow-y-auto p-4">
            <div className="text-stone-700">
                <Link href="/"> {"< Back"} </Link>
            </div>
            <div className="mx-auto w-1/2 pt-4 overflow-hidden">
                <Image 
                src={props.image} 
                alt={props.name} 
                width={100} 
                height={100} 
                className="w-full rounded-full"
                />
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