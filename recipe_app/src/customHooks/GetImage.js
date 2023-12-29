export const getRecipeImage=(title)=>{
    let imagePath=require('../Assets/images/recipeImages/placeholder-recipe.PNG');
    try{
        imagePath=require(`../Assets/images/recipeImages/${title}.PNG`);
    } catch(error){

    } finally{
        return imagePath
    }
}

// export const getProfileImage=(userName)=>{
//     let imagePath=require('../Assets/images/profile-placeholder.PNG');
//     try{
//         imagePath=require(`../Assets/images/profileImages/${userName}.PNG`);
//     } catch(error){

//     } finally{
//         return imagePath
//     }
// }