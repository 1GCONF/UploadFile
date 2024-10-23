# from flask import Flask, render_template, request, redirect
# import os

# app = Flask(__name__)
# # Directory to store uploaded files
# UPLOAD_FOLDER = 'uploads'
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# # Ensure the folder exists
# if not os.path.exists(UPLOAD_FOLDER):
#     os.makedirs(UPLOAD_FOLDER)

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return "No file part"
    
#     file = request.files['file']
#     if file.filename == '':
#         return "No selected file"
    
#     # Save the file to the upload folder
#     file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
#     return f"File '{file.filename}' uploaded successfully!"

# if __name__ == '__main__':
#     app.run(debug=True)
