package internal

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

type Env struct {
	APIKey string
	Folder string
}

func ReadEnv() (Env, error) {
	godotenv.Load()

	env := Env{}

	envMapping := map[string]*string{
		"YANDEX_CLOUD_API_KEY": &env.APIKey,
		"YANDEX_CLOUD_FOLDER":  &env.Folder,
	}

	for envName, fieldPtr := range envMapping {
		value := os.Getenv(envName)
		if value == "" {
			return Env{}, fmt.Errorf("%s not found in environment variables or .env file", envName)
		}
		*fieldPtr = value
	}

	return env, nil
}
