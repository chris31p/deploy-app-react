//import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid2,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const RecipeList = () => {  
  const {data, loading, error} = useFetch(import.meta.env.VITE_RECIPES_API_URL);

  if(error){
    return <p>Error obteniendo los datos...</p>
  }
  
  if (loading) {
    return (
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <CircularProgress />
      </Grid2>
    );
  }

  return (
    <>
      <Grid2 container spacing={2} sx={{ padding: "20px" }}>
        {data && data.meals.map((recipe) => (
          <Grid2 item xs={12} sm={6} md={4} key={recipe.idMeal}>
            <Card>
              <CardActionArea
                component={Link}
                to={`/recetas/${recipe.strMeal}`}
                state={{ recipe }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.strMealThumb}
                  alt={recipe.strMeal}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {recipe.strMeal}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default RecipeList;

//EJERCICIO 2
//Crea dos estados utilizando el HOOK STATE. Un estado que nos permita guardar las recetas al consultras la API y otro que permita manejar
//el momento en que la data está cargándose.

//UseEffect: Me permite ejecutar algo
  /* useEffect(() => {
    USANDO PROMESAS then catch
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals))
      .catch((error) => {
        console.log("Fetching error", error);
      })
      .finally(() => setLoading(false));

    USANDO async await
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        console.log("Fetching error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []); */