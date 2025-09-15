package config

import (
	"fmt"
	"os"

	"example.com/ecomerce/model"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDatabase() {
	var err error

	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("DB_PORT")

	dsn := fmt.Sprintf(
		"host=%s user=%s password=%s dbname=%s port=%s sslmode=require",
		host, user, password, dbname, port,
	)

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database: " + err.Error())
	}

	fmt.Println("Database connection established")

	// Auto-migrate your models
	DB.AutoMigrate(
		&model.Product{},
		&model.User{},
		&model.Image{},
		&model.MerchantProfile{},
		&model.Order{},
		&model.OrderItem{},
	)
}
