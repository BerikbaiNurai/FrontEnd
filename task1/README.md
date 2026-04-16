Lab 13.1 - Stack Navigation 

Description: In this project, I built a mobile app using React Native and Stack Navigation. The app has three screens: Home, Profile, and Settings. Users can move between screens and send data using route parameters.

Features:
Stack navigation using React Navigation
NavigationContainer and Stack.Navigator setup
Three screens: Home, Profile, Settings
Navigation between screens using buttons
Route parameters (example: userId)
Custom header styles
Back navigation support

Screens:
  Home Screen
    Shows welcome text and user stats
    Buttons to go to Profile and Settings screens
    Sends `userId` to Profile screen

  Profile Screen
    Receives `userId` from route parameters
    Shows user profile information
    Displays posts, followers, and following
    Button to go to Settings screen

  Settings Screen
    Contains app settings with switches
    User can enable/disable options
    Includes logout button with confirmation

  Navigation Setup
    Used `NavigationContainer` to wrap the app
    Used `createNativeStackNavigator` for stack navigation
    Defined routes in `RootStackParamList` for type safety

  Route Parameters
    Profile screen receives `userId`
    Data is passed using `navigation.navigate()`
    Example: `navigate("Profile", { userId: "123" })`

Conclusion: This lab helped me understand how stack navigation works in React Native. I learned how to move between screens and pass data using parameters.