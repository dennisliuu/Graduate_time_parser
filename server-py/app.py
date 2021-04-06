import flask
import main
from flask import request, jsonify
from flask_cors import CORS, cross_origin

app = flask.Flask(__name__)
CORS(app)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return "hi"


@app.route('/api', methods=['POST'])
def searching():
    data = request.json
    print("DATA", data)
    # headers = {'Access-Control-Allow-Origin': '*'}
    return main.main(data['School'], data['Name'])


if __name__ == "__main__":
    app.run()
