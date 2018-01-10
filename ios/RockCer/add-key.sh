#!/bin/sh
security create-keychain -p travis ios-build.keychain
security import ./ios_distribution.cer -k ~/Library/Keychains/ios-build.keychain -T /usr/bin/codesign
security import ./dist.p12 -k ~/Library/Keychains/ios-build.keychain -P 123456 -T /usr/bin/codesign
mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
cp ./profile/hocEDisco.mobileprovision ~/Library/MobileDevice/Provisioning\ Profiles/
