package internal

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func TextRequest(env *Env) {
	url := "https://llm.api.cloud.yandex.net/foundationModels/v1/completion"

	modelUri := fmt.Sprintf("gpt://%s/yandexgpt-lite", env.Folder)

	requestData := map[string]interface{}{
		"modelUri": modelUri,
		"completionOptions": map[string]interface{}{
			"stream":      false,
			"temperature": 0.6,
			"maxTokens":   2000,
		},
		"messages": []map[string]string{
			{
				"role": "user",
				"text": "Привет, расскажи о себе.",
			},
		},
	}

	jsonData, err := json.Marshal(requestData)
	if err != nil {
		fmt.Printf("Ошибка при создании JSON: %v\n", err)
		return
	}

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Printf("Ошибка при создании запроса: %v\n", err)
		return
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Api-Key "+env.APIKey)
	req.Header.Set("x-folder-id", env.Folder)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Printf("Ошибка при выполнении запроса: %v\n", err)
		return
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("Ошибка при чтении ответа: %v\n", err)
		return
	}

	if resp.StatusCode != http.StatusOK {
		fmt.Printf("Ошибка API: статус %d, тело: %s\n", resp.StatusCode, string(body))
		return
	}

	var response map[string]interface{}
	err = json.Unmarshal(body, &response)
	if err != nil {
		fmt.Printf("Ошибка при разборе JSON ответа: %v\n", err)
		return
	}

	fmt.Printf("Ответ API: %+v\n", response)
}
