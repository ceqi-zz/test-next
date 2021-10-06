package handler

import (
	"fmt"
	"net/http"
	"os"
)

func RevenueHandle(res http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(res, os.Getenv("TEST"))

}
