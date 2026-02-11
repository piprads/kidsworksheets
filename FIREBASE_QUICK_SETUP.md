# Firebase Quick Setup Guide

## Step 1: Enable Firestore Database

1. In your Firebase Console, look at the left sidebar
2. Click on **"Firestore Database"** (or "Build" → "Firestore Database")
3. Click the **"Create database"** button
4. Select **"Start in test mode"** (we'll add security rules later)
5. Choose a location (pick the closest to you, e.g., `us-central1` or `asia-south1`)
6. Click **"Enable"**
7. Wait for it to finish (takes about 30 seconds)

## Step 2: Get Your Firebase Config

1. In Firebase Console, click the **gear icon ⚙️** next to "Project Overview" (top left)
2. Click **"Project settings"**
3. Scroll down to the **"Your apps"** section
4. You'll see different platform icons (iOS, Android, Web)
5. Click the **Web icon** `</>` (it looks like `</>`)
6. Register your app:
   - App nickname: `kidsworksheets` (or any name)
   - You can skip "Firebase Hosting" for now
   - Click **"Register app"**
7. You'll see a code block with `firebaseConfig` - **COPY THIS ENTIRE CONFIG OBJECT**

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 3: Update firebase-config.js

1. Open `firebase-config.js` in your project
2. Replace the placeholder values with the values you copied
3. Make sure to keep the same structure

Example:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSy...",  // Paste your apiKey here
    authDomain: "your-project.firebaseapp.com",  // Paste your authDomain here
    projectId: "your-project-id",  // Paste your projectId here
    storageBucket: "your-project.appspot.com",  // Paste your storageBucket here
    messagingSenderId: "123456789",  // Paste your messagingSenderId here
    appId: "1:123456789:web:abcdef"  // Paste your appId here
};
```

## Step 4: Set Up Security Rules

1. In Firebase Console, go to **"Firestore Database"**
2. Click on the **"Rules"** tab (at the top)
3. You'll see some default rules
4. Replace them with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read/write stats (thumbs up count)
    match /stats/{document=**} {
      allow read, write: if true;
    }
    
    // Allow anyone to write feedbacks (but only you can read via console)
    match /feedbacks/{document=**} {
      allow read: if false;
      allow write: if true;
    }
    
    // Allow anyone to write signups (but only you can read via console)
    match /signups/{document=**} {
      allow read: if false;
      allow write: if true;
    }
    
    // Allow anyone to write thumbs up clicks (but only you can read via console)
    match /thumbsUpClicks/{document=**} {
      allow read: if false;
      allow write: if true;
    }
  }
}
```

5. Click **"Publish"** button

## Step 5: Test It!

1. Save your `firebase-config.js` file
2. Commit and push:
   ```bash
   git add firebase-config.js
   git commit -m "Add Firebase configuration"
   git push origin main
   ```
3. Wait 1-2 minutes for GitHub Pages to rebuild
4. Visit your site: https://piprads.github.io/kidsworksheets/
5. Open browser console (F12) and look for:
   - ✅ "Firebase initialized successfully" message
6. Test by clicking the thumbs up button - the count should update!

## Troubleshooting

**Can't find Firestore Database?**
- Look in the left sidebar under "Build"
- Or search for "Firestore" in the Firebase Console

**Can't find Project Settings?**
- Click the gear icon ⚙️ next to "Project Overview" (top left of the page)

**Don't see the Web app icon?**
- Scroll down in "Your apps" section
- If you don't see any apps, click "Add app" button

**Getting errors?**
- Make sure you copied ALL the values correctly
- Check that there are no extra spaces or quotes
- Make sure Firestore is enabled (Step 1)
