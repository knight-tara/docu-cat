package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/knight-tara/docu-cat/config"
	"github.com/knight-tara/docu-cat/models"
)

func CreateUser(c *gin.Context) {

	// struct to store req body
	var body struct {
		FirstName string
		Surname string
		EmailAddress string
		DateOfBirth string
	}
	c.Bind(&body)

	user := models.User{
		FirstName: body.FirstName,
		Surname: body.Surname,
		EmailAddress: body.EmailAddress,
		DateOfBirth: body.DateOfBirth}

	result := config.DB.Create(&user)

	if result.Error != nil {
		c.Status(400)
		return
	}

	c.JSON(200, gin.H{
		"user": user,
	})
}

func GetAllUsers(c *gin.Context) {
	var users []models.User
	config.DB.Find(&users)

	c.JSON(200, gin.H{
		"users": users,
	})
}

func GetUser(c *gin.Context) {
	// get ID from URL 
	id := c.Param("id")

	var user models.User
	config.DB.First(&user, id)

	c.JSON(200, gin.H{
		"user": user,
	})
}

func UpdateUser(c *gin.Context) {
	// get ID from URL 
	id := c.Param("id")

	// struct to store req body
	var body struct {
		FirstName string
		Surname string
		EmailAddress string
		DateOfBirth string
	}
	c.Bind(&body)

	var user models.User
	config.DB.First(&user, id)

	config.DB.Model(&user).Updates(models.User{
		FirstName: body.FirstName, 
		Surname: body.Surname,
		EmailAddress: body.EmailAddress,
		DateOfBirth: body.DateOfBirth,
	})

	c.JSON(200, gin.H{
		"user": user,
	})
}

func DeleteUser(c *gin.Context) {
		// get ID from URL 
		id := c.Param("id")

		config.DB.Delete(&models.User{}, id)

		c.Status(200)
}
