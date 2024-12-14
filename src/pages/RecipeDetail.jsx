//import React from 'react'

import { Container, ListItem, ListItemText, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";


const RecipeDetail = () => {
    const location = useLocation();
    const recipe = location.state?.recipe;
    
    const getIngredients = () => {
      const ingredients = [];
      for (let index = 1; index <= 20; index++) {
        const ingredient = recipe[`strIngredient${index}`];
        const measure = recipe[`strMeasure${index}`];
        if(ingredient){
          ingredients.push(`${measure} ${ingredient}`)
        }
      }
      return ingredients;
    }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {recipe.strMeal}
      </Typography>
      <img src={recipe.strMealThumb}
      alt={recipe.strMeal}
      style={{width:'50%', borderRadius:'10px'}}>
      </img>
      <Typography variant="h5" gutterBottom>
        Ingredientes:
      </Typography>
      <ul>
        {getIngredients().length > 0 ? (
          getIngredients().map((ingredient, index) => (
            <ListItem variant="li" key={index}>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">No hay ingredientes disponibles.</Typography>
        )}
      </ul>
      <Typography variant="h6" gutterBottom>
        Instrucciones:
      </Typography>
      <Typography variant="p" gutterBottom>
        {recipe.strInstructions}
      </Typography>
    </Container>

  )
}

export default RecipeDetail

//EJERCICIO 3
//Recorre la funcion getIngredients utilizando .map() para mostrar los ingredientes de la receta en una lista no ordenada
//Puedes usar las etiquetas ul y li  o algun componente de Material UI para manejar listas.