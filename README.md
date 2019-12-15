# Features
* Capacitor for using camera & GPS.
* Spotify API.
* Angular Maps

# Capacitor Setup
* npm install --save @capacitor/core @capacitor/cli
* npx cap init 
* ionic build 
* npx cap add android/ios
* ionic build && npx cap sync `for plugins changes`
* ionic build && npx cap copy `for HTML, CSS, JS changes`
* npx cap open android/ios