# REST API for a Sleep Tracker App
##### **Objective:**
Developed a RESTful API using Node.js and Express that allows a mobile app to store and retrieve user sleep data.
1. **API Endpoints:**
    - **POST `/sleep`:** Allows users to submit their sleep duration along with a timestamp.
        - Accepts JSON data including **`userId`**, **`hours`**, and **`timestamp`**.
        - Stores the data in a database (Used MongoDb).
    - **GET `/sleep/:userId`:** Retrieves a list of all sleep records for a given user, sorted by date.
    - **DELETE `/sleep/:recordId`:** Deletes a specific sleep record by its ID.
  
      
## To start the project in localhost:
**Run in terminal**

1. npm i
2. npm start <br/>
   
   ![Screenshot (3923)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/1626a024-fd60-42e8-81a1-00f9f8a814a9)

## API Endpoints- POST,GET, DELETE

Used Thunder Client Visual code extension to check API endpoints.<br/>
Database used is MongoDb compass.

### POST
Added user_01 three times with different timestamp.

![Screenshot (3918)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/4a25b136-4d9b-43e1-b274-beefdc8ab86e)
![Screenshot (3919)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/4f10554a-3535-4029-bc60-f1de020673dd)
![Screenshot (3921)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/19d00472-644d-421a-a75a-70f4b4a218a2)


### GET
Will get info of each users in acsending order of timestamp.eg (user_01's data is shown in acsending order of timestamp three times)

![Screenshot (3922)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/c86aa588-dc5b-4f12-97a4-e7013ef8ad1f)


### DELETE
if user doesnot exist it will show " sleep record not found"

![Screenshot (3916)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/61dc4506-27bb-48db-b21c-89f5d02c0905)

else users's data will be deleted

![Screenshot (3915)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/24ca1b9f-4ad4-4292-8666-a4215a762bf9)

### MongoDb compass

![Screenshot (3925)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/12f15567-0ae3-4b46-98e0-43fe928c898c)


## TESTING
used jest for testing<br/>
Run in terminal
1. npm test
   
![Screenshot (3924)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/911902c5-4c35-4a43-8536-643509613648)
