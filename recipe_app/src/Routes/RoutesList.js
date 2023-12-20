import SignUp from '../Pages/OnboardingPages/signUp'
import SignIn from '../Pages/OnboardingPages/signIn'
import DisplayRecipes from '../Pages/RecipePages/DisplayRecipes'
import RecipeDetails from '../Pages/RecipePages/RecipeDetails'


const routes={
    signUp: SignUp,
    sign_up: "/recipe/signup",

    signIn: SignIn,
    sign_in: "/recipe/signin",

    displayRecipes: DisplayRecipes,
    display_recipes: "/recipe/displayrecipes",

    recipeDetails: RecipeDetails,
    recipe_details:"/recipe/recipedetails"
    
}

export default routes;