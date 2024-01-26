import { Skeleton } from "@mui/material";
import { Container } from "reactstrap";
import '../Assets/Styles/displayRecipes.scss'

export default function DisplayRecipesSkeleton(props) {
    
    const skeletons = () => {
        const skeletonCards = [];

        for (let i = 0; i < 10; i++) {
            skeletonCards.push(
                <div key={i} className="recipeCard">
                    <Skeleton animation="wave" variant="rectangular" height='200px' width='100%' className="recipeImage" />
                    <Skeleton animation="wave" variant="text" />
                    <Skeleton animation="wave" className="heading-text-level1" />
                    <Skeleton animation="wave" className="heading-text-level2" />
                 </div>
               
            );
        }

        return skeletonCards;
    }

    return (
        <>
            <Container className="grid-container">
                {skeletons()}
            </Container>
        </>
    )
}
