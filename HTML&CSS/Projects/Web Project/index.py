from flask import Flask, render_template

app=Flask(__name__)

@app.route('/')
def home():
    # name='avinash'
    return render_template('Html/main.html')
app.run(debug=True)

# @app.route('/')
# def home():
#     return 'avinash shhs '

# app.run(debug=True)
