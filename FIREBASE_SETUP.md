# Firebase Setup Instructions

This guide will help you set up Firebase to track thumbs up clicks, feedback, and email signups across all users.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `kidsworksheets` (or any name you prefer)
4. Click **Continue**
5. Disable Google Analytics (optional, you can enable it later if needed)
6. Click **Create project**
7. Wait for project creation, then click **Continue**

## Step 2: Enable Firestore Database

1. In your Firebase project, click on **"Firestore Database"** in the left sidebar
2. Click **"Create database"**
3. Select **"Start in test mode"** (for now - we'll add security rules later)
4. Choose a location (select the closest to your users, e.g., `us-central` or `asia-south1`)
5. Click **Enable**

## Step 3: Get Your Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Click **"Project settings"**
3. Scroll down to **"Your apps"** section
4. Click the **Web icon** `</>` to add a web app
5. Register app:
   - App nickname: `kidsworksheets-web`
   - Check "Also set up Firebase Hosting" (optional)
   - Click **Register app**
6. Copy the `firebaseConfig` object that appears

## Step 4: Update firebase-config.js

1. Open `firebase-config.js` in your project
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_ACTUAL_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## Step 5: Set Up Firestore Security Rules (Important!)

1. In Firebase Console, go to **Firestore Database**
2. Click on the **"Rules"** tab
3. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read stats
    match /stats/{document=**} {
      allow read: if true;
      allow write: if true; // For now, allow writes. You can restrict later.
    }
    
    // Allow anyone to write feedbacks and signups
    match /feedbacks/{document=**} {
      allow read: if false; // Only you can read (via console)
      allow write: if true;
    }
    
    match /signups/{document=**} {
      allow read: if false; // Only you can read (via console)
      allow write: if true;
    }
    
    match /thumbsUpClicks/{document=**} {
      allow read: if false; // Only you can read (via console)
      allow write: if true;
    }
  }
}
```

4. Click **"Publish"**

## Step 6: Test the Setup

1. Commit and push your changes:
   ```bash
   git add firebase-config.js script.js index.html
   git commit -m "Add Firebase integration for tracking"
   git push origin main
   ```

2. Wait for GitHub Pages to rebuild (1-2 minutes)

3. Visit your site: https://piprads.github.io/kidsworksheets/

4. Open browser console (F12) and check for:
   - ✅ "Firebase initialized successfully" message
   - No error messages

5. Test the features:
   - Click thumbs up - count should increment
   - Submit feedback - should save
   - Submit email - should save

## Step 7: View Your Data

1. Go to Firebase Console → Firestore Database
2. You'll see collections:
   - `stats` - Contains thumbs up count
   - `feedbacks` - All feedback entries
   - `signups` - All email signups
   - `thumbsUpClicks` - Individual click records

## Firebase Free Tier Limits

- **50,000 reads/day**
- **20,000 writes/day**
- **20,000 deletes/day**
- **1 GB storage**

This is more than enough for most websites!

## Troubleshooting

### Firebase not initializing?
- Check browser console for errors
- Verify `firebase-config.js` has correct values
- Make sure Firebase SDK scripts are loaded in `index.html`

### Data not saving?
- Check Firestore security rules
- Check browser console for errors
- Verify Firestore is enabled in Firebase Console

### Can't see data in Firestore?
- Make sure you're looking at the correct project
- Check that data was actually saved (try clicking thumbs up again)
- Refresh the Firestore console

## Next Steps (Optional)

1. **Set up Firebase Authentication** - If you want user accounts
2. **Add Firebase Analytics** - Track page views and user behavior
3. **Set up email notifications** - Get notified when someone submits feedback
4. **Create a dashboard** - Build an admin page to view all data

## Support

If you encounter issues:
1. Check browser console for error messages
2. Verify all steps were completed correctly
3. Check Firebase Console for any service status issues
