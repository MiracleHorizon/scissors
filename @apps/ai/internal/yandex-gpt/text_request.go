package internal

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/joho/godotenv"
)

// TextRequest reads YANDEX_CLOUD_API_KEY from .env file or environment variables
func TextRequest() (string, error) {
	// Try to load from .env file, but don't return error if file doesn't exist
	// First check in the current directory
	_ = godotenv.Load()

	// Also try project root
	rootEnv := filepath.Join("..", "..", ".env")
	_ = godotenv.Load(rootEnv)

	// Also check for .env in the AI directory
	aiEnv := filepath.Join("..", ".env")
	_ = godotenv.Load(aiEnv)

	// Get the API key from environment variables (either from .env or set directly)
	apiKey := os.Getenv("YANDEX_CLOUD_API_KEY")
	if apiKey == "" {
		return "", fmt.Errorf("YANDEX_CLOUD_API_KEY not found in environment variables or .env file")
	}

	return apiKey, nil
}
