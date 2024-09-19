---
title: "Building Confidence in Code: My Journey with Flutter Testing"
date: "2024-09-18"
---
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I built a Flutter mobile app for [EMS workers](https://responsetimetrack.app/) to track their time. As the project grew, the codebase exceeded 5,000 lines, and I realized I needed a way to implement changes without breaking existing functionality. With some free time on my hands—no college classes and no girlfriend—I saw this as an opportunity to deepen my knowledge of Flutter. I set out on a mission to write unit and widget tests for every part of the app.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One major benefit of writing tests was the chance to refactor and decouple the codebase. For example, one view displaying the history of rescue times was incredibly challenging to write automated tests for because it contained too many widgets within the `build` function. So, I broke down the 700 lines of widget-heavy code into six smaller widget classes, each focused on specific functionality. This not only made it easier to write widget tests but also made future updates to the code much simpler.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Another perk of writing comprehensive tests is the confidence it gave me in the app’s functionality. After adding a new column to the database to link records, for example, I knew the database’s core functionality remained intact, thanks to the SQLite unit tests I’d written.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The biggest downside, however, was the time it took to write all the tests. Each class test took between 30 minutes to two hours, adding up to at least 100 hours of work. Since I had the time, I dedicated about a month and a half to creating these unit and widget tests, all while enjoying a nice latte on Saturday mornings. In the end, it was definitely worth the effort.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, I have an automated testing pipeline that runs whenever I make changes to the codebase. With every commit, GitHub Actions runs the tests, and any failures trigger an email alert, allowing me to quickly address issues. I’m confident my code changes are safe for release.

Here is the output of the last run of Github Action from blog:
```
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/settings_layout_test.dart: History layout class testing History Layout set and default
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/settings_layout_test.dart: History layout class testing History Layout Card Layout Boolean
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/settings_layout_test.dart: History layout class testing History Layout next layout loop
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_card_test.dart: TimeCard domain class test TimeCard initiated variable test
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_card_test.dart: TimeCard domain class test TimeCard time stamp test
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_test.dart: TimeMileageCard Domain Class Variable Initiation 
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_test.dart: TimeMileageCard Domain Class Sync ID Format
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_test.dart: TimeMileageCard Domain Class Sync Delete ID
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward All Settings Enabled
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward Only Truck Entry Enabled
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward Only Note Entry Enabled
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward Settings Enabled False
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward and Backward All Settings Enabled
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward and Backward Only Truck Enabled
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward and Backward Only Notes Enabled
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_mileage_card_tracker_test.dart:  Time Track Forward and Backward No Settings Enabled
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/settings_test.dart: Setting domain class test Settings default value test
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/settings_test.dart: Setting domain class test Variable change test
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/settings_test.dart: Setting domain class test Singleton test
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_record_test.dart: TimeRecord domain class test TimeRecord test
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_record_tracker_test.dart: TimeRecordTracker Domain Class Time Tracking button pushes forward and back
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/domain/time_record_tracker_test.dart: TimeRecordTracker Domain Class Time Tracking button pushes forward and reset
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/time_record_dao_cold_shared_preference_test.dart: Testing DAO Cold Storage Add a new time mileage record
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/time_record_dao_cold_shared_preference_test.dart: Testing DAO Cold Storage Edit a time mileage record
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/time_record_dao_cold_shared_preference_test.dart: Testing DAO Cold Storage Get all records
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/time_record_dao_cold_shared_preference_test.dart: Testing DAO Cold Storage Removed last record
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/time_record_dao_cold_shared_preference_test.dart: Testing DAO Cold Storage Removed all records
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/settings_dao_test.dart: Settings DAO Test Test saving and setting data
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/settings_dao_test.dart: Settings DAO Test Test saving, setting, and deleting data
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/time_record_dao_cached_test.dart: Testing DAO Cached Test Time Tracking All Forward
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/model/dao/time_record_dao_cached_test.dart: Testing DAO Cached Test Time Tracking Cache
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/tracker/widget/time_track_mileage_test.dart: TimeTrackNoteEntry Widget Testing TimeTrackNoteEntry Type 4.20 mileage
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/tracker/widget/time_tracker_keyboard_test.dart: TimeTrackerKeyboard Widget Tests TimeTrackerKeyboard Widget Test 4.20
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/tracker/widget/time_tracker_keyboard_test.dart: TimeTrackerKeyboard Widget Tests TimeTrackerKeyboard Widget Test Max Characters
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/tracker/widget/time_track_button_test.dart: TimeTrackButton Widget TimeTrackButton Contine and Back taps
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/tracker/widget/time_track_button_test.dart: TimeTrackButton Widget TimeTrackButton Contine and No Back taps
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/tracker/widget/time_track_truck_test.dart: Time Track Truck Widget Time Track Truck Entry
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/tracker/widget/time_track_textfield_notes_test.dart: TimeTrackNoteEntry Widget Testing 
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/settings_view_test.dart: Settings Page Widget Tests Settings Account Online with Subscription Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/settings_view_test.dart: Settings Page Widget Tests Settings Account Online with No Subscription Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/settings_view_test.dart: Settings Page Widget Tests Settings Guess Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_truck/setting_truck_setup/setting_truck_slide_test.dart:  
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_truck/setting_truck_setup/setting_truck_setup_test.dart: Truck Setup Widget Test Setting Truck Setup CRUD
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_truck/setting_truck_default_test.dart: SettingTruckDefault Widget Select Truck Default
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_truck/setting_truck_card_test.dart:  Setting Enable Truck Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_truck/setting_truck_card_test.dart:  Setting Enable Truck Update
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_location_card_test.dart: Setting Location Card Tab Setting Location Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_location_card_test.dart: Setting Location Card Tab Setting Location Update
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_duration_days_card_test.dart: Settings Duration Days Tab Setting Duration Days Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_duration_days_card_test.dart: Settings Duration Days Tab Setting Duration Days Update
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_csv_file_name_test.dart: Settings CSV FileName Tab Setting File Name Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_csv_file_name_test.dart: Settings CSV FileName Tab Setting File Name Update
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_enable_note_entry_test.dart: Settings Enable Note Entry Tab Setting Enable Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_enable_note_entry_test.dart: Settings Enable Note Entry Tab Setting Enable Update
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_history_layout_card_test.dart:  Setting History Layout Card Tab Display
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/setting/setting_cards/setting_history_layout_card_test.dart:  Setting History Layout Card Tab Updating
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/card_layout_test.dart: Card Layout Widget Card Layout Click Widget
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/card_layout_test.dart: Card Layout Widget Card Layout Display Widget
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/history_edit_test.dart: History Edit Layout History Edit Not Found
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/history_edit_test.dart: History Edit Layout History Edit Mileage
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/history_edit_test.dart: History Edit Layout History Edit Notes
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/history_edit_test.dart: History Edit Layout History Edit Date Changes
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/history_event_card_test.dart: HistoryEventCard Widget Testing 
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/grid_layout_test.dart: Grid Layout Widget Grid Layout Tap Row
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/app/windows/history/widgets/grid_layout_test.dart: Grid Layout Widget Grid Layout Display Text
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/keyboards/number_keyboard_custom_test.dart: Testing Number Keyboard Typing
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/keyboards/number_keyboard_custom_test.dart: Testing Number Keyboard Typing 0123456789
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/keyboards/time_track_keyboard_test.dart: Time Track Keyboard Test Testing Decimal Keyboard Typing
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/search_tab_test.dart: SearchTab Widget tests Test Search callback
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_text_insert_test.dart: AlertTextInsert Widget Tests AlertTextInsert alert accept
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_text_insert_test.dart: AlertTextInsert alert cancel
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_text_insert_test.dart: AlertTextInsert alert default
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_text_insert_test.dart: AlertTextInsert alert max characters
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_two_choice_test.dart: AlertTwoChoices Widget Tests AlertTwoChoices Button Pushes
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_one_choice_test.dart: AlertOneChoice Widget Tests AlertOneChoice Button Push
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_number_insert_test.dart: AlertNumberInsert Widget Tests Cancel alert
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/alert_number_insert_test.dart: AlertNumberInsert Widget Tests Accept alert
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/button_fill_test.dart: WideButton Widget Class WideButton Tap
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/view/global/widgets/action_icon_test.dart: Test Action Icon Tap
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/time_record_service_test.dart: Testing Time Record Service Conversion Retrieving All Records
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/time_record_service_test.dart: Testing Time Record Service Conversion Retrieving All Records with Date Search
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/time_record_service_test.dart: Testing Time Record Service Add and Retrieve One Record
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/time_record_service_test.dart: Testing Time Record Service Add and Delete One Record
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/truck_service_test.dart:  Truck Service CRUD Operation
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/truck_service_test.dart:  Truck Service Get All
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/settings_service_test.dart: Testing Setting Service Testing Location Setting
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/settings_service_test.dart: Testing Setting Service Testing History Layout Setting
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/settings_service_test.dart: Testing Setting Service Testing File Name
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/settings_service_test.dart: Testing Setting Service Testing Duration Days
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/settings_service_test.dart: Testing Setting Service Testing Note Entry
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/settings_service_test.dart: Testing Setting Service Testing Truck Enabled Setting
✅ /home/runner/work/EMS-App/EMS-App/test/unitTest/service/settings_service_test.dart: Testing Setting Service Testing Truck Default ID Days

🎉 92 tests passed.
```