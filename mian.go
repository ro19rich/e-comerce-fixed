package main

import (
	"fmt"
	"os"

	"example.com/ecomerce/config"
	"example.com/ecomerce/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables from .env for local development
	if err := godotenv.Load(); err != nil {
		fmt.Println("Warning: .env file not found, relying on Render environment variables")
	}

	// Set Gin to release mode for production
	gin.SetMode(os.Getenv("GIN_MODE"))

	// Connect to database
	config.ConnectDatabase()

	// Initialize Gin
	server := gin.Default()

	// Configure CORS using environment variable
	frontendURL := os.Getenv("FRONTEND_URL")
	server.Use(cors.New(cors.Config{
		AllowOrigins:     []string{frontendURL, "http://localhost:5173"}, // local dev + production
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// Register routes
	routes.RegistorRoutes(server)

	// Start server on Render port
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // fallback for local dev
	}

	server.Run(":" + port)
}
