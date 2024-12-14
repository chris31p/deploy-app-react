import { Button, Paper, Typography } from "@mui/material";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Advice = () => {
  const [update, setUpdate] = useState(false);
  const { data } = useFetch(import.meta.env.VITE_ADVICES_API_URL, update);

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 2,
        textAlign: "center",
        marginTop: 2,
      }}
    >
      <div>
        <Typography variant="body2" gutterBottom color="textSecondary">
          Consejo: {data?.slip.advice}
        </Typography>
      </div>
      <Button variant="contained" onClick={() => setUpdate(!update)}>
        Actualizar frase
      </Button>
    </Paper>
  );
};

export default Advice;
