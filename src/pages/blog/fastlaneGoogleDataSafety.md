---
title: "Automating Google Play Data Safety with Fastlane"
date: "2026-08-27"
---

While working on Android app distribution through the [Google Play Console](https://developer.android.com/distribute/console), I realized how painstaking it can be to manually update multiple variations of an app's Google Data Safety form. At the time, the fastest way to update the Google Data Safety form was to manually download and upload a CSV file through Google Play Console. While looking for a better solution, I noticed several [GitHub issues](https://github.com/fastlane/fastlane/discussions/19851) in Fastlane requesting support for updating the Google Data Safety form, but there was no existing plugin to automate the process. As I browsed through the Google [Android Publisher API documentation](https://developers.google.com/android-publisher/api-ref/rest/v3/applications/dataSafety), I discovered an API endpoint that supports uploading the CSV file.

I decided to make this my travel project while traveling from Maine to Florida for my sister's wedding. The implementation is fairly simple, as the API request only requires the Data Safety CSV file, the app's package name, and authentication. The authentication is handled through the Android Publisher API using a service account key from Google Cloud. Here is an example of running upload of Google data safety.

```ruby
upload_google_data_safety(
  csv_file: "data_safety_export.csv",
  package_name: "my.package.name",
  json_key: "key.json"
)
```

To expand on the Google Data Safety form, I built a command-line interface for filling it out. I reverse-engineered the Data Safety form in Google Play Console by going through the form multiple times and comparing the different inputs with the resulting CSV exports. After several hours of experimenting, I discovered that the CSV file contains a set of starter questions related to data in transit and user authentication, followed by questions for each data category about whether the data is shared or collected. One interesting detail I found is that a couple of the starter-question fields require "no" when the answer is negative, while the data category questions use an empty value ("") to represent "no." To run the Data Safety form questions from the terminal in Fastlane, run:

```ruby
prompt_create_data_safety_csv(
  csv_file: "google_data_safety.csv"
)
```

The project has now surpassed 5,000 downloads on [RubyGems](https://rubygems.org/gems/fastlane-plugin-google_data_safety) and has received 3 stars on [GitHub](https://github.com/owenbean400/fastlane-plugin-google_data_safety). The plugin is available to install through Fastlane using: 


```bash
fastlane add_plugin google_data_safety
```