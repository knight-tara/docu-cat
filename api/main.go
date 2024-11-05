package main

import (
	"github.com/gin-gonic/gin"
	"github.com/knight-tara/docu-cat/config"
	"github.com/knight-tara/docu-cat/controllers"
	"github.com/knight-tara/docu-cat/models"
)

func main() {

	config.LoadEnvironmentVariables()
	config.ConnectToDatabase()

	// Migrate database schema
	config.DB.AutoMigrate(&models.User{})

	r := gin.Default()
	r.Static("/assets", "./assets")

	// Authorised accounts
	authorized := r.Group("/admin", gin.BasicAuth(gin.Accounts{
		"adminuser": "adminpassword",
	}))

	authorized.POST("/", controllers.CreateUser)
	authorized.GET("/", controllers.GetAllUsers)
	authorized.GET("/:id", controllers.GetUser)
	authorized.PUT("/:id", controllers.UpdateUser)
	authorized.DELETE("/:id", controllers.DeleteUser)

	r.Run() 
}


