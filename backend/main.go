package main

import (
	"backend/configs"
	"backend/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()
	

	//run Database
	configs.ConnectDB()
    e.Logger.Fatal(e.Start(":8080"))

    //routes
    routes.UserRoute(e)

	// Middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

	e.GET("/", func(c echo.Context) error {
		return c.JSON(200, &echo.Map{"data": "Hello from Echo & mongoDB"})
	})

	e.Logger.Fatal(e.Start(":8080"))
}

// mongo user: roylee0912 pass: DbPQ5lCPIIPOBP2U
//mongodb+srv://roylee0912:DbPQ5lCPIIPOBP2U@go-playground.fihatiw.mongodb.net/?retryWrites=true&w=majority