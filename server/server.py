from flask import Flask,request
import json

app = Flask(__name__)

@app.get("/")
def home():
    return "Hello from flask"


# create another API that redirets you to a test

@app.get("/test")
def test():
    return "Hello from the test"


@app.route("/server")
def server():
    server=request.environ.get("SERVER_SOFTWARE")
    return server

@app.get("/api/about")
def about():
    myname ={"name": "adrian aguinaga"}
    return json.dumps(myname)
    

app.run(debug=True)