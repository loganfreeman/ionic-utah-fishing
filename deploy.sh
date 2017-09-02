ionic cordova build android --prod --release
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
rm ionic-utah-fishing.apk
~/Library/Android/sdk/build-tools/25.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk ionic-utah-fishing.apk
