# ServerKakao

#### Sopt 29기 합동세미나 6조

>  <br>
> 2021.11.22 ~ 11.26
>  <br>
>  <br>

<br>

<br>
<br>

---

## Sopt 29기 합동세미나 6조 ServerKakao

|                                        [손시형](https://github.com/sysy1013)                                        |                                      [서호영](https://github.com/tkarndbrtk)                                       |
| :-----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/68213343/143472741-f12ce25e-8962-45f2-abb9-8ec50165f704.png" /> | <img src="https://user-images.githubusercontent.com/54793607/142727990-4f79b65b-c12b-4d15-b171-29c61287908a.png"/> |
|                                                    VIEW API 담당                                                    |                                                  CHANNEL API 담당                                                  |

<br>
<br>

---

## Code Convention

<img src="https://user-images.githubusercontent.com/68213343/143473860-7fd3762f-862b-4bcd-b858-1d33d0e00373.png">
<img src="https://user-images.githubusercontent.com/68213343/143473937-d902a383-5b2b-4b9c-a154-a1e135a6a1f2.png">

<br>
<br>

---

## Git Convention

<img src="https://user-images.githubusercontent.com/68213343/143473208-fffc6863-2b2e-42b5-8a14-5ee4ee2b12bc.png">
<img src="https://user-images.githubusercontent.com/68213343/143474202-5e4a3b0f-efe9-415c-8bc0-a76c195daa90.png">

<br>
<br>

---

## API Docs

[합동세미나 6조 API Docs](https://www.notion.so/storypanda/API-DOCS-6755f7a1e9da4a26a83f2567b69aea4e)

<br>
<br>

---

## ERD

<img src="https://user-images.githubusercontent.com/69101054/143474787-946e196f-a7ea-4d13-93a4-a4d2a93fa5f5.png">

<br>
<br>

---

## DataGrip Table

#### addchannel

<img src="https://user-images.githubusercontent.com/69101054/143479451-38bc9dcd-2fa9-403c-8d83-481864787a04.png">

#### article

<img src="https://user-images.githubusercontent.com/69101054/143474417-704ad2ea-d6f7-4129-b364-4ed06e4c9234.png">

#### channel

<img src="https://user-images.githubusercontent.com/69101054/143474324-494ffd70-1749-4d5e-a1c3-7b0db5890066.png">

#### user

<img src="https://user-images.githubusercontent.com/69101054/143474206-fb3a39f1-d9e2-42a2-9bb8-3211ae81034d.png">

#### video

<img src="https://user-images.githubusercontent.com/69101054/143474038-b848d463-8770-4c12-8e75-0a0be5f0cbb6.png">

#### videochannel

<img src="https://user-images.githubusercontent.com/69101054/143473924-5cb4a0f1-da93-4b1a-9e87-ec8f36fd5985.png">

<br>
<br>

---

## package.json

```json
{
  "name": "functions",
  "description": "Cloud Functions for Firebase",
  "scripts": {
    "lint": "eslint .",
    "serve": "cross-env NODE_ENV=development firebase emulators:start --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "cross-env NODE_ENV = production firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "14"
  },
  "main": "index.js",
  "dependencies": {
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dayjs": "^1.10.7",
    "dotenv": "^10.0.0",
    "eslint-config-prettier": "^8.3.0",
    "express": "^4.17.1",
    "firebase-admin": "^9.8.0",
    "firebase-functions": "^3.14.1",
    "helmet": "^4.6.0",
    "hpp": "^0.2.3",
    "lodash": "^4.17.21",
    "pg": "^8.7.1"
  },
  "devDependencies": {
    "eslint": "^7.6.0",
    "eslint-config-google": "^0.14.0",
    "firebase-functions-test": "^0.2.0"
  },
  "private": true
}
```
