# React Native + Firebase Seed

## Prerequisites

- an IDE, such as [VS Code](https://code.visualstudio.com/)
- [Git Client](https://git-scm.com/download/win)
- [NodeJs](https://nodejs.org/en/)
- [React Native / Expo CLI](https://reactnative.dev/docs/environment-setup)
- A [Firebase](https://firebase.google.com/docs/web/setup) web application

## Quick start

Setup a `firebase-config.json` file at the root of the project, as instructed [here](https://docs.expo.dev/guides/using-firebase/).

The file should look like this:

```
{
    "apiKey": "[YOUR_API_KEY]",
    "authDomain": "[YOUR_DOMAIN].firebaseapp.com",
    "projectId": "[YOUR_PROJECT_ID]",npm
    "storageBucket": "[YOUR_STORAGE_BUCKET].appspot.com",
    "messagingSenderId": "[YOU_GET_THE_POINT]",
    "appId": "[THIS_IS_THE_MOST_IMPORTANT_LINE]
  }
```

In a terminal:

```
git clone https://github.com/deroude/react-native-firebase-seed.git
cd react-native-firebase-seed
npm install
npm start
```

/\*

--- 01 TYPOGRAPHY SYSTEM

- Font size system (px)
  10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights:
  Default: 400
  Medium: 500
  Semi-bold: 600
  Bold: 700

- Line heights:
  Default: 1
  Small: 1.05
  Medium: 1.2
  Paragraph default: 1.6

-Letter spacing
-0.5px
0.75px

--- 02 COLORS

- Primary:
- Tints: ;
- Shades:
- Accents:
- # Greys: #555 #333
  "#aac0aa"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBSJiMdisq6_WPE22tk64W37djF57c03oA",
authDomain: "recovereats-722e7.firebaseapp.com",
projectId: "recovereats-722e7",
storageBucket: "recovereats-722e7.appspot.com",
messagingSenderId: "153756491871",
appId: "1:153756491871:web:01e90fc104340f85dffbea",
measurementId: "G-BT1GGNS476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
