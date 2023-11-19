from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import serial
import time

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# arduino_port = 'COM3'  # Update this with your Arduino port
ser = None


@app.route('/')
def index():
    global ser
    if ser is None:
        ser = serial.Serial(port='COM3', timeout=0.1)
    return render_template('index.html')


@socketio.on('alert')
def read_arduino():
    if ser is not None:
        try:
            while True:
                data = ser.readline().decode().strip().split(',')
                print(data)
                if len(data) == 4:
                    value1, value2, static_val1, static_val2 = map(int, data)
                    socketio.emit('alert', {'rightside': value1, 'leftside': value2,
                                            'fixed1': static_val1, 'fixed2': static_val2})
                time.sleep(0.1)
        finally:
            ser.close()


if __name__ == '__main__':
    # try:
    # socketio.start_background_task(target=read_arduino)
    socketio.run(app, debug=False)
    # except KeyboardInterrupt:
    #     ser.close()
