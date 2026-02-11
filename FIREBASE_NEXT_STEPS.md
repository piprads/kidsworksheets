# Firebase Setup - Next Steps

✅ **Step 1 & 2 Complete!** Your Firebase config has been added.

## Step 3: Enable Firestore Database (IMPORTANT!)

You need to enable Firestore for the backend to work:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your **kidsworksheets** project
3. In the left sidebar, click **"Firestore Database"**
4. Click **"Create database"** button
5. Select **"Start in test mode"**
6. Choose a location (e.g., `us-central1` or `asia-south1`)
7. Click **"Enable"**
8. Wait for it to finish (about 30 seconds)

## Step 4: Set Up Security Rules

After Firestore is enabled:

1. In Firestore Database, click the **"Rules"** tab (at the top)
2. Replace the default rules with these:

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

3. Click **"Publish"** button

## Step 5: Test It!

1. Wait 1-2 minutes for GitHub Pages to rebuild with your new config
2. Visit: https://piprads.github.io/kidsworksheets/
3. Open browser console (F12)
4. Look for: ✅ "Firebase initialized successfully"
5. Test features:
   - Click thumbs up - count should increment
   - Submit feedback - should save
   - Submit email - should save

## Step 6: View Your Data

1. Go to Firebase Console → Firestore Database
2. You'll see collections appear as users interact:
   - `stats` - Thumbs up count
   - `feedbacks` - All feedback entries
   - `signups` - All email signups
   - `thumbsUpClicks` - Individual click records

## Troubleshooting

**"Firebase not configured" message?**
- Make sure Firestore is enabled (Step 3)
- Check that security rules are published (Step 4)

**Data not saving?**
- Check browser console for errors
- Verify security rules are correct
- Make sure Firestore is in "test mode" or has proper rules

**Can't see data?**
- Try clicking thumbs up or submitting feedback first
- Refresh the Firestore console
- Check that you're looking at the correct project

## You're Almost Done! 🎉

Just complete Steps 3 and 4 above, and your backend will be fully functional!
