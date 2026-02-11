# Firestore Security Rules - Copy and Paste These

Go to Firebase Console → Firestore Database → Rules tab

**Copy and paste these EXACT rules:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read and write stats (thumbs up count)
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

**Important:** After pasting, click the **"Publish"** button!
