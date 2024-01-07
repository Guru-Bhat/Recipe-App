import SignUp from '../Pages/OnboardingPages/signUp'
import SignIn from '../Pages/OnboardingPages/signIn'
import HomePage from '../Pages/RecipePages/HomePage'
import RecipeDetails from '../Pages/RecipePages/RecipeDetails'
import UserAccountPage from '../Pages/AccountPages/UserAccountPage'
import AddRecipe from '../Pages/RecipePages/AddRecipe'
import EditRecipe from '../Pages/RecipePages/EditRecipe'
import DeleteRecipe from '../Pages/RecipePages/DeleteRecipe'

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
    user_account_page: "/recipe/myaccount",

    addRecipe: AddRecipe,
    add_recipe: "/recipe/addrecipe",

    editRecipe: EditRecipe,
    edit_recipe: "/recipe/editrecipe",

    deleteRecipe:DeleteRecipe,
    delete_recipe: "/recipe/deleterecipe"
}

export default routes;