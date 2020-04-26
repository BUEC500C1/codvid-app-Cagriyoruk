# COVID-19 Map Application with React Native
## Initial Goals
Build a native mobile application that displays:
* COVID-19 cases per country on a MAP
* COVID-19 cases per country Live on a MAP (changes)
* COVID-19 cases per country based on a date.
* Summary of total cases for the world
* Live Summary for the World
## Strech Goals
* Display data per Province
* User can put their address and track COVID-19 in their neighborhood (Only in countries where regional data is provided)
## Application Milestones
### Step 1
* Set up the React Native environment on your machine
### Step 2
* Go through React Native Tutorials:
  * Build Hello World Applications
  * Run Hello World applications on emulator and your phone.
### Step 3
* Develop a use case to display a map
### Step 4 
* Use a different branch to play around with the COVID-19 API that provides the data.
* Display the data as Text on our application.
### Step 5
* Overlay the data on the maps.
## Our Progress
### Step 1 [Finished]
* Download Node 12 LTS or greater installed
* Install Expo CLI command line utility with:

  ``` 
  npm install -g expo-cli 
  ```

* Run this command the create a new project:

  ``` 
  expo init AwesomeProject
  cd AwesomeProject
  npm start # you can also use: expo start 
  ```
* Screenshot
 ![Step_1](https://user-images.githubusercontent.com/55101879/79078937-c26ea500-7cd9-11ea-851a-a0169dd839bd.png)

### Step 2 [Finished]
* Open a App.js file and write a code that outputs Hello World
* Screenshot Web
 ![Step2Web](https://user-images.githubusercontent.com/55101879/79079168-7d4b7280-7cdb-11ea-9243-320961710c48.png)
* Screenshot Android

  <img width="162" alt="Step2AndroidOnWeb" src="https://user-images.githubusercontent.com/55101879/79080638-a7556280-7ce4-11ea-88c5-de5f166be978.png">

### Step 3 [Finished]
Following the installation guide from https://github.com/react-native-community
* Installing the react-native with the commandline:

 ```
 npm install react-native-maps --save-exact
 ```
* Get a Google API Maps key and put it inside the build grade
 ```
 <application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
  
   <!-- You will also only need to add this uses-libray tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
 ```
* Modify the App.js file in order to retrieve maps. 
![Step3 image](https://user-images.githubusercontent.com/55101879/80293556-818d7c00-872e-11ea-82d8-8d5b41931441.png)

### Step 4 [Finished]

* With the dataset provided from the covid19api.com, display:
  * Date
  
  * Total Confirmed Cases
  
  * Total Deaths
  
  * Total Recovered Cases
  
![step4_image](https://user-images.githubusercontent.com/55101879/80294714-66743980-8739-11ea-9197-89be0c739f8d.png)


