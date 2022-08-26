echo "Removing node modules from $1 then reinstalling..."
cd $1
rm -rf node_modules
npm install
echo "Cleaning gradle project..."
cd android
./gradlew clean
cd ..