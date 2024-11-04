package models

import (
	// "time"

	"gorm.io/gorm"
)

// gorm.Model fields = ID, CreatedAt, UpdatedAt, DeletedAt

type User struct {
	gorm.Model
	FirstName string
	Surname string
	EmailAddress string
	DateOfBirth string
}

// *time.Time nullable
// TO DO: change to date