import flask
import main
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
CORS(app) 
app.config["DEBUG"] = True

# For test post api
# curl -i -H "Content-Type: application/json" -X POST -d '{"School":"1", "Name": "name"}' http://localhost:5000/

@app.route('/', methods=['GET'])
# @cross_origin()
def home():
    return "hi"

@app.route('/api', methods=['POST'])
# @cross_origin()
def searching():
    data = request.json
    print("DATA", data)
    # headers = {'Access-Control-Allow-Origin': '*'}
    return main.main(data['School'], data['Name'])

if __name__=="__main__":
    app.run()