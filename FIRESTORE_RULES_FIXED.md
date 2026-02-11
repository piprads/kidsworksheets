# Firestore Security Rules - FIXED VERSION

The issue is that checking for existing emails requires READ permission. Here are the corrected rules:

## Step-by-Step Instructions:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your **kidsworksheets** project
3. Click **"Firestore Database"** in the left sidebar
4. Click the **"Rules"** tab at the top
5. **DELETE all existing rules** and paste these:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read and write stats (thumbs up count)
    match /stats/{document=**} {
      allow read, write: if true;
    }
    
    // Allow anyone to write feedbacks
    match /feedbacks/{document=**} {
      allow read: if false;
      allow write: if true;
    }
    
    // Allow anyone to read and write signups (read needed to check duplicates)
    match /signups/{document=**} {
      allow read, write: if true;
    }
    
    // Allow anyone to write thumbs up clicks
    match /thumbsUpClicks/{document=**} {
      allow read: if false;
      allow write: if true;
    }
  }
}
```

6. Click **"Publish"** button (very important!)

## Why the fix?

The email signup function needs to:
- **READ** from `signups` collection to check if email already exists
- **WRITE** to `signups` collection to save the email

The previous rules only allowed WRITE, not READ, which caused the permission error when checking for duplicates.
