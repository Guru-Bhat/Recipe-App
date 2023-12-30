import SignUp from '../Pages/OnboardingPages/signUp'
import SignIn from '../Pages/OnboardingPages/signIn'
import HomePage from '../Pages/RecipePages/HomePage'
import RecipeDetails from '../Pages/RecipePages/RecipeDetails'
import UserAccountPage from '../Pages/AccountPages/UserAccountPage'


const routes={
    signUp: SignUp,
    sign_up: "/recipe/signup",

    signIn: SignIn,
    sign_in: "/recipe/signin",

    homePage: HomePage,
    home_page: "/recipe/homepage",

    recipeDetails: RecipeDetails,
    recipe_details:"/recipe/recipedetails",
    
    userAccountPage: UserAccountPage,
    user_account_page: "/recipe/myaccount"
}

export default routes;