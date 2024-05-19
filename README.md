# REST API for a Sleep Tracker App

## To start the project in localhost:

1. npm i
2. npm start <br/>
   
![Screenshot (3923)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/3e4446b4-361c-41d5-a8f9-24e6c3b0e922)
   
## API Endpoints- POST,GET, DELETE

Used Thunder Client Visual code extension to check API endpoints.<br/>
Database used is MongoDb compass.

### POST
Added user_01 three times with different timestamp.

![Screenshot (3918)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/37ecf411-2bda-4ca6-b9cc-0121457a7387)
![Screenshot (3919)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/23d4dcde-d542-4cc7-8b6b-6cb20f19cb28)
![Screenshot (3921)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/495e1fc9-1885-47cd-b794-47912a048780)


### GET
Will get info of each users in acsending order of timestamp.eg (user_01's data is shown in acsending order of timestamp three times)

![Screenshot (3922)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/2c819b68-b80f-491f-96b4-4f59b16b868d)


### DELETE
if user doesnot exist it will show " sleep record not found"

![Screenshot (3916)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/4f90ac98-92c5-4a82-89de-56d246528c9e)

else users's data will be deleted

![Screenshot (3915)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/fb180cf3-5725-4dc3-a6ae-bf2bc742d640)

### MongoDb compass

![Screenshot (3925)](https://github.com/sakshi8299/sleep_tracker_app1/assets/78993444/12f15567-0ae3-4b46-98e0-43fe928c898c)


## TESTING
used jest for testing

1. Run npm test
   
![Screenshot (3924)](https://github.com/sakshi8299/sleep_tracker_app/assets/78993444/1458b00a-50dd-4b33-936f-c0d49ee2ae8c)
