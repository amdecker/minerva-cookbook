import Link from 'next/link'
import recipeData from './recipes/recipeData';

export default function Home() {
  return (
    <div className='mx-auto w-1/2'>
          <h1 className='text-3xl'>Cookbook</h1>
      <div>
        Welcome to the M25 cookbook.
        <br></br>
        <br></br>
      </div>
      <div>
        Guiding question: How can we use food to connect the class of 2025 across time and space?
        <br></br>
        <br></br>
        Our classmates come from over 60 different countries, and throughout our four years we will have lived in seven different countries together. Each person comes to Minerva with their own unique culinary culture, and together all of us use food to learn about the culture we live in. This website and its associated book (in progress) are meant to continue the process of learning about each other and the world throughout our lives.
      </div>
      <br></br>
      <h2 className='text-2xl'>
        Dishes
      </h2>
      {Object.keys(recipeData).map(dishSlug => 
        <div key={dishSlug}>
          <Link className='underline' href={`/recipes/${dishSlug}`}>{recipeData[dishSlug].name}</Link>
        </div> 
      )}
    </div>

  )
}
