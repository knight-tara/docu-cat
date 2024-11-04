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

	r.POST("/", controllers.CreateUser)
	r.GET("/", controllers.GetAllUsers)
	r.GET("/:id", controllers.GetUser)
	r.PUT("/:id", controllers.UpdateUser)
	r.DELETE("/:id", controllers.DeleteUser)

	r.Run() 
}


