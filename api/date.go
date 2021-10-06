package handler

import (
	"encoding/json"
	"net/http"
	"time"
)

func DateHandler(w http.ResponseWriter, r *http.Request) {
	currentTime := time.Now().Format(time.RFC850)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(currentTime)
}
