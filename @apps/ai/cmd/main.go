package main

import (
	"log"

	"scissors/ai/internal"
)

func main() {
	// Получаем переменные окружения
	env, err := internal.ReadEnv()
	if err != nil {
		log.Fatalf("Ошибка при чтении переменных окружения: %v", err)
	}

	internal.TextRequest(&env)
}
