import pyrebase

firebaseConfig= {
'apiKey': "AIzaSyChnSmiLz3bpFjFidQQyecVV1359R5ltqQ",
'authDomain': "odbo-3ff9c.firebaseapp.com",
'projectId': "odbo-3ff9c",
'storageBucket': "odbo-3ff9c.appspot.com",
'messagingSenderId': "968327560140",
'appId': "1:968327560140:web:0ec3f498417d7ff6dafb69",
'measurementId': "G-P5VSL0SZFX"
}

firebase= pyrebase.initialize_app(firebaseConfig)
auth= firebase.auth()

def s