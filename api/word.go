package handler

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
)

type Word struct {
	ID      string
	Results []Result
}

type Result struct {
	LexicalEntries []LexicalEntry
}

type LexicalEntry struct {
	Entries []Entry
}

type Entry struct {
	Senses []Sense
}

type Sense struct {
	Definitions []string
}

func WordHandler(res http.ResponseWriter, req *http.Request) {
	switch req.Method {
	case http.MethodGet:
		handleGet(res, req)

}

func handleGet(res http.ResponseWriter, req *http.Request) {
	wordID := string(req.URL.Query().Get("id"))

	params := "fields=" + url.QueryEscape("definitions,examples")
	url := "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/" + wordID + "?" + params

	client := &http.Client{}
	req, err := http.NewRequest(
		"GET",
		url,
		nil,
	)
	if err != nil {
		log.Fatal("Error sending request")
	}
	req.Header.Add("app_id", os.Getenv("OX_APP_ID"))
	req.Header.Add("app_key", os.Getenv("OX_APP_KEY"))
	resp, err := client.Do(req)

	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	var word Word
	var definitions []string
	json.Unmarshal([]byte(body), &word)
	for _, r := range word.Results {
		for _, le := range r.LexicalEntries {
			for _, e := range le.Entries {
				for _, s := range e.Senses {
					for _, def := range s.Definitions {
						definitions = append(definitions, def)
					}
				}
			}
		}
	}

	json.NewEncoder(res).Encode(definitions)
}
