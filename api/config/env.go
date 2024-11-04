package config

import (
    "log"

    "github.com/lpernett/godotenv"
)

func LoadEnvironmentVariables() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}