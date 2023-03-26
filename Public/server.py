from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/game_state', methods=['POST'])
def game_state():
    state = request.get_json()
    # Process game state and call the AI model for the next action
    return jsonify({'action': next_action})

if __name__ == '__main__':
    app.run(debug=True)
