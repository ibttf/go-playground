package routes

import (
	"backend/controllers"
	"backend/middleware"

	"github.com/labstack/echo/v4"
)

func UserRoute(e *echo.Echo) {
	//PUBLIC ROUTES
	 e.PUT("/user/:userId", controllers.EditAUser)
	 e.DELETE("/user/:userId", controllers.DeleteAUser)
	 e.GET("/users", controllers.GetAllUsers)
//PROTECTED ROUTES
	e.GET("/users", controllers.GetAllUsers,middleware.VerifyGoogleToken)
	e.GET("/user/:userId", controllers.GetAUser, middleware.VerifyGoogleToken)
    e.POST("/user", controllers.CreateUser, middleware.VerifyGoogleToken) 

}