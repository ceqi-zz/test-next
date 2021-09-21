package handler

import (
	"fmt"
	"net/http"
	"time"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello Next, Hello Go \n")

	currentTime := time.Now().Format(time.RFC850)
	fmt.Fprintf(w, currentTime)

}
