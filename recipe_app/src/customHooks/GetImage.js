export const getImage=(title)=>{
    let imagePath=require('../Assets/images/recipeImages/placeholder-recipe.PNG');
    try{
        imagePath=require(`../Assets/images/recipeImages/${title}.PNG`);
    } catch(error){

    } finally{
        return imagePath
    }
}