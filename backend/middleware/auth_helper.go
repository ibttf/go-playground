package middleware

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
)

type GoogleTokenInfo struct {
	Audience  string `json:"aud"`
	ExpiresIn int64  `json:"expires_in"`
	IssuedTo  string `json:"issued_to"`
	Scope     string `json:"scope"`
}

func VerifyGoogleToken(next echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		// Extract the token from the header
		authHeader := c.Request().Header.Get("Authorization")
		if authHeader == "" {
			return c.JSON(http.StatusUnauthorized, "missing Authorization header")
		}
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			return c.JSON(http.StatusUnauthorized, "invalid Authorization header format")
		}
		tokenStr := parts[1]

		// Call Google's endpoint to validate the token
		resp, err := http.Get(fmt.Sprintf("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=%s", tokenStr))
		if err != nil {
			return c.JSON(http.StatusUnauthorized, "error during token verification")
		} else if resp.StatusCode != 200 {
			return c.JSON(http.StatusUnauthorized, "invalid token")
		}
		defer resp.Body.Close()

		// Decode the response
		body, _ := ioutil.ReadAll(resp.Body)
		var tokenInfo GoogleTokenInfo
		if err := json.Unmarshal(body, &tokenInfo); err != nil {
			return c.JSON(http.StatusUnauthorized, "failed to parse token info")
		}

		// Check if the token's audience/issued_to is what you expect.
		// expectedAudience := os.Getenv("GOOGLE_CLIENT_ID")
		// if tokenInfo.Audience != expectedAudience {
		// 	return c.JSON(http.StatusUnauthorized, "token's audience does not match expected value")
		// }

		// If valid, proceed with the next handler
		return next(c)
	}
}
