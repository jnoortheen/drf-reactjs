FROM python:3.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
WORKDIR /backend
ADD pyproject.lock /backend/
RUN pip install poetry && poetry install
