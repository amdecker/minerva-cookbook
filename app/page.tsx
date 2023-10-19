import Link from 'next/link'
import recipeData from './recipe/recipeData';

export default function Home() {
  return (
    <div>
          <h1 className='text-3xl'>Cookbook</h1>
      <div>
        Welcome to the M25 cookbook.
      </div>
      <br></br>
      <h2 className='text-2xl'>
        Dishes
      </h2>
      {Object.keys(recipeData).map(dishSlug => 
        <div key={dishSlug}>
          <Link className='underline' href={`/recipe/${dishSlug}`}>{recipeData[dishSlug].name}</Link>
        </div> 
      )}
    </div>

  )
}
