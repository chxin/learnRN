xcodebuild -project "./ios/learnRN.xcodeproj" -scheme "learnRN_Test" archive -archivePath "./buildIOS/learnRN_0.0.1.xcarchive" -quiet
xcodebuild -exportArchive -archivePath "./buildIOS/learnRN_0.0.1.xcarchive" -exportPath "./buildIOS/learnRN_0.0.1" -exportOptionsPlist "exportTestOptions.plist" -quiet
