from flask import Flask, render_template, request, redirect, url_for
import smtplib

app = Flask(__name__)


@app.route('/')
def tv():
    return render_template('TV.html')


@app.route('/mobile')
def mobile():
    return render_template('mobile.html')


@app.route('/contacts')
def show_contacts():
    return render_template('contacts.html')


@app.route('/send_message', methods=['GET'])
def send_message():
    return render_template('send_message.html')


@app.route('/submit_contacts', methods=['POST'])
def submit_contacts():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        message = request.form['message']

        recipient_email = 'bochkadlameda@gmail.com'

        email_message = f"""
                Имя: {name}
                Почта: {email}
                Телефон: {phone}

                Сообщение:
                {message}
                """.encode('utf-8')

        try:
            # Создаем соединение с SMTP-сервером
            smtp_server = smtplib.SMTP('smtp.mail.ru', 587)
            smtp_server.starttls()
            smtp_server.login('gmansurov18@mail.ru', '***')

            # Отправляем сообщение
            smtp_server.sendmail('gmansurov18@mail.ru', recipient_email, email_message)

            # Закрываем соединение с SMTP-сервером
            smtp_server.quit()

            return redirect(url_for('send_message'))
        except Exception as e:
            return f'Ошибка при отправке сообщения: {str(e)}'


if __name__ == '__main__':
    app.run(debug=True)

# ruD6Eqeu72PtrRz5CyCP
