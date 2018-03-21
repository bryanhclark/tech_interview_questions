## What happens when you send an HTTP Request
  * Browser looks up the IP address througha DNS lookup
    * Browser Cache
    * Router Cache
    * ISP cache
  * Sends HTTP Request
    * Get Request Contains:
      * URL To Fetch
      * Browser Identifies Itself (User-Agent Header)
      * States what type of responses it will accept
      * Connection Header
        * Asks the server to keep the TCP connection open for further requests
      * Cookies:
        * Key: value pairs that track the state of the web site in different page requests
  * Server responds with a redirect
    * Ex: http://facebook.com -> http://www.facebook.com
      * useful for search engine algo's
    * Response also has:
      * character set, date, expiration, cache-control
  * Browser sends a request for the redirected page
  * Server sends a response
    * Response Codes:
      * 1XX: informational response:
        * 100: Continue
      * 2XX: Success
        * 200: Ok
        * 201: Created
      *3XX: Redirection
        * 301: Moved Permanantly
      * 4XX: Client Error:
        * 400: Bad Request
      * 5XX: Server Error:
        * 500: Internal Server Error

