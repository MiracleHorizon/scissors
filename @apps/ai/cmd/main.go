package main

import (
	"log"

	"scissors/ai/internal"
)

func main() {
	env, err := internal.ReadEnv()
	if err != nil {
		log.Fatalf("Ошибка при чтении переменных окружения: %v", err)
	}

	internal.TextRequest(&env)
}
