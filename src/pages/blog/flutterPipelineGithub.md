---
title: "Flutter Pipeline with Github Action"
date: "2024-05-22"
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; During database systems class at USM, we had project to build a mobile app for recipe cookbook. The mobile app was developed with Flutter framework on Dart programming language. The database is client side utilizing the SQFite library. To streamline the deployment of testing app for our group, we used Github Actions, fastlane, and Flutter SDK.

The process of Github steps to build and deploy app is similar with Android and iOS:

1. Checkout codebase.
2. Setup program and framework versions (Flutter, Ruby, and Java).
3. Run fastlane to increment version number based on current app version on in testing.
4. Flutter clean.
5. Flutter download packages used in project.
6. Setup icon sizes to Android or iOS.
7. Compile mobile application based on OS.
8. Deploy app build to app store for internal testing.


