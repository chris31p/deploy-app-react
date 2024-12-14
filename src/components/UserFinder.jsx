//import React from 'react'
import { Avatar, Button, Paper, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState, useRef } from "react";

const UserFinder = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchUsers = async () => {
    const username = inputRef.current.value;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_GITHUB_API_URL}${username}`
      );

      if (!response.ok) {
        throw new Error("Usuario no encontrado");
      }
      const data = await response.json();
      //console.log("data", data);
      setUser(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setUser(null);
    }
  };

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
      <Typography>Buscar usuario de GitHub</Typography>
      <TextField
        inputRef={inputRef}
        fullWidth
        variant="outlined"
        placeholder="Ingrese el nombre del usuario"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={fetchUsers}
        sx={{ marginTop: 2 }}
      >
        Buscar
      </Button>
      {error && (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      )}
      {user && (
        <div>
          <Avatar
            src={user.avatar_url}
            alt="Avatar del usuario"
            sx={{
              width: 40 * 2, // 10  8px (theme spacing)
              height: 40 * 2,
              margin: "0 auto",
              marginTop: 2,
              marginBottom: 2,
            }}
          />
          <Typography variant="body1" gutterBottom color="info">
            Nombre: {user.name}
          </Typography>
          <Typography variant="body1" gutterBottom color="success">
            Seguidores: {user.followers}
          </Typography>
          <Typography variant="body1" gutterBottom color="secondary">
            Repositorios públicos: {user.public_repos}
          </Typography>
        </div>
      )}
    </Paper>
  );
};

export default UserFinder;
