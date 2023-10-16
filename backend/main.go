package main

import (
	"backend/configs"
	"backend/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	// Middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

	// Connect to the database
	configs.ConnectDB()

	// Define routes
	routes.UserRoute(e)
	e.GET("/", func(c echo.Context) error {
		return c.JSON(200, &echo.Map{"data": "Hello from Echo & mongoDB"})
	})

	// Start the Echo server
	e.Logger.Fatal(e.Start(":8080"))
}