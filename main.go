package main

import (
	"bytes"
	"io/ioutil"
	"net/http"
	"os/exec"
)

func main() {
	http.HandleFunc("/", indexHandler)
	http.HandleFunc("/run", runHandler)
	http.ListenAndServe(":8080", nil)
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	content, _ := ioutil.ReadFile("templates/index.html")
	w.Write(content)
}

func runHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusBadRequest)
		return
	}

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error reading request", http.StatusInternalServerError)
		return
	}

	// Execute the Go code
	result, err := executeCode(string(body))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write([]byte(result))
}

func executeCode(code string) (string, error) {
	// Write the code to a temporary .go file
	tmpfile, err := ioutil.TempFile("", "localplayground-*.go")
	if err != nil {
		return "", err
	}
	defer tmpfile.Close()

	_, err = tmpfile.WriteString(code)
	if err != nil {
		return "", err
	}

	// Run the Go code using the `go run` command
	cmd := exec.Command("go", "run", tmpfile.Name())
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	err = cmd.Run()
	if err != nil {
		return stderr.String(), nil
	}

	return stdout.String(), nil
}
