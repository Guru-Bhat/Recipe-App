export default function MyAccountPage(){

    const { data, error, isLoading } = useGetRecipesQuery();
    return(
        <>
        <h1>My account</h1>
        </>
    )
}