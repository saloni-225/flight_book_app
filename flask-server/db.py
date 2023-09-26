import pyodbc

class ItemDatabase:
    def __init__(self):
        server = 'saloni_225'
        database = 'flight_management'
        self.conn = pyodbc.connect(f'DRIVER=SQL Server;SERVER={server};DATABASE={database}')
        self.cursor = self.conn.cursor()  # Create a cursor in the constructor

    def get_items(self):
        result=[]
        query = "SELECT * FROM Flights"
        self.cursor.execute(query)
        for row in self.cursor.fetchall():
            item_dict={}
            # Store in the form of item and key value in dictionary
            item_dict["FlightId"]=row[0]
            item_dict["FlightName"]=row[1]
            item_dict["FromLocation"]=row[2]
            item_dict["ToLocation"]=row[3]
            item_dict["ArrivalDate"]=row[4]
            item_dict["DepartureDate"]=row[5]
            item_dict["TravellerNo"]=row[6]
            result.append(item_dict)
        print(result)

    def get_item(self, flight_id):
        pass

    def add_item(self, id, body_object):
        pass

    def put_item(self, id, body_object):
        pass

    def delete_item(self, flight_id):
        pass

db = ItemDatabase()
db.get_items()
