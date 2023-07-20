# Installation

clone repository

### API
- run `npm install` to installing package
- run `npm run start` to run with normal nodejs
- run `npm run dev` to run with nodemon

# API Documentation

### List Songs / playlist

**Request:** 
***GET /api/playlist*** HTTP/1.1
```
Accept: application/json
```
**Successful Response:**
```
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
[
  {
    "songId": 1,
    "title": "LOST IN PARADISE",
    "artists": [
      "ALI",
      "AKLO"
    ],
    "url": "https://open.spotify.com/track/7kRKlFCFLAUwt43HWtauhX?si=d90fe0b4381743b4",
    "playCount": 104687203
  },
  {
    "songId": 2,
    "title": "LOSER",
    "artists": [
      "Kenshi Yonezu"
    ],
    "url": "https://open.spotify.com/track/7AqUE5AY514dbzeOAfJRa0?si=c6d0129c40e24f3b",
    "playCount": 45233991
  },
  ...continue
]
```

### Add Song

**Request:** 
***POST /api/playlist*** HTTP/1.1
```
Accept: application/json
Content-Type: application/json
```
**Successful Response:**
```
HTTP/1.1 201 CREATED
Content-Type: application/json
```
```json
{
  "title": "test",
  "artist": ["test1", "test2", ...continue],
  "url": "http://test.co"
}
```


### Playing Song / played count

**Request:** 
***GET /api/playlist/play/:id*** HTTP/1.1
```
Accept: application/json
```
**Successful Response:**
```
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
{
  "songId": 1,
  "title": "LOST IN PARADISE",
  "artists": [
    "ALI",
    "AKLO"
  ],
  "url": "https://open.spotify.com/track/7kRKlFCFLAUwt43HWtauhX?si=d90fe0b4381743b4",
  "playCount": 104687209
}
```

## Most Played List Song

**Request:** 
***GET /api/playlist/most-played*** HTTP/1.1
```
Accept: application/json
```
**Successful Response:**
```
HTTP/1.1 200 OK
Content-Type: application/json
```
```json
[
  {
    "songId": 3,
    "title": "ピースサイン",
    "artists": [
      "Kenshi Yonezu"
    ],
    "url": "https://open.spotify.com/track/364JzOajs76bJymjHm3sVY?si=4a2ca2eea4b84617",
    "playCount": 182847751
  },
  {
    "songId": 1,
    "title": "LOST IN PARADISE",
    "artists": [
      "ALI",
      "AKLO"
    ],
    "url": "https://open.spotify.com/track/7kRKlFCFLAUwt43HWtauhX?si=d90fe0b4381743b4",
    "playCount": 104687203
  },
  ...continue
]
```