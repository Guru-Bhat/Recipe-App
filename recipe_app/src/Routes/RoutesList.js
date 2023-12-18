import SignUp from '../Pages/OnboardingPages/signUp'
import SignIn from '../Pages/OnboardingPages/signIn'
import DisplayRecipes from '../Pages/RecipePages/DisplayRecipes'

const routes={
    signUp: SignUp,
    sign_up: "/recipe/signup",

    signIn: SignIn,
    sign_in: "/recipe/signin",

    displayRecipes: DisplayRecipes,
    display_recipes: "/recipe/displayrecipes",
    
}

export default routes;