FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
WORKDIR /backend
ADD pyproject.toml /backend/
ADD pyproject.lock /backend/
RUN pip install poetry && poetry config settings.virtualenvs.create false && poetry install
