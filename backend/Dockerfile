FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_RUN_PORT=5000

WORKDIR /app

COPY Pipfile Pipfile.lock ./

RUN pip install --no-cache-dir pipenv

RUN pipenv install --system --deploy

COPY . .

RUN adduser --disabled-password --gecos "" app && \
    chown -R app:app /app

USER app

EXPOSE 5000

CMD ["flask", "--app", ".", "run", "--host", "0.0.0.0", "--port", "5000"]