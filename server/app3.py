from flask import Flask, render_template, jsonify
from flask_serial import Serial
from flask_bootstrap import Bootstrap

import os
import threading
import re
import json
import time

import eventlet
eventlet.monkey_patch()

# updated_dir = os.getcwd().replace("\\", "/")
# alerts_path = f'{updated_dir}/alerts.log'
# last_update_time = os.path.getmtime(alerts_path)
# update_status = {"updated": False}

app = Flask(__name__)
app.config['SERIAL_TIMEOUT'] = 0.1
app.config['SERIAL_PORT'] = 'COM3'
app.config['SERIAL_BAUDRATE'] = 9600
app.config['SERIAL_BYTESIZE'] = 8
app.config['SERIAL_PARITY'] = 'N'
app.config['SERIAL_STOPBITS'] = 1

# last_update_time = os.path.getmtime(os.getcwd())

ser = Serial(app)
bootstrap = Bootstrap(app)


# def check_file_updates():
#     global last_update_time, update_status

#     while True:
#         current_update_time = os.path.getmtime(alerts_path)

#         if current_update_time > last_update_time:
#             # File has been updated
#             print(f"The file {alerts_path} has been updated.")
#             # You can perform additional actions here, such as reading the updated content.

#             # Update the last update time
#             last_update_time = current_update_time

#             # Set the update status to True
#             update_status["updated"] = True

#         # Sleep for a specific interval (e.g., 1 minute)
#         time.sleep(60)


@app.route('/')
def index():
    return render_template('index.html')


# @app.route('/check_update')
# def check_update():
#     global update_status
#     status = update_status
#     update_status["updated"] = False
#     return jsonify(status)


def handle_send(json_str):
    data = json.loads(json_str)
    ser.on_send(data['message'])
    print("send to serial: %s" % data['message'])


# @socketio.on("alert")
@ser.on_message()
def handle_message(msg):
    pattern = re.compile(r'Fixed1:(\d+)')
    matches = pattern.findall(msg.decode('utf-8'))
    print("receive a message:", matches)
    # socketio.emit("serial_message", data={"message": str(msg)})

    # Check if the received message is below the threshold
    with open('alerts.log', 'a') as file:
        if any(int(number) <= 700 for number in matches):
            # socketio.emit("alert", data={"message": "Threshold crossed!"})
            file.write("Threshold crossed!\n")


@ser.on_log()
def handle_logging(level, info):
    print(level, info)


if __name__ == '__main__':
    # Warning!!!
    # this must use `debug=False`
    # if you use `debug=True`, it will open serial twice, it will open serial failed!!!
    try:
        # update_checker_thread = threading.Thread(target=check_file_updates)
        # update_checker_thread.daemon = True
        # update_checker_thread.start()
        app.run(debug=False)
    except KeyboardInterrupt:
        exit()
