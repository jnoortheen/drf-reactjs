from django.db import connection
from pymongo.database import Database


def get_db() -> Database:
    """return PyMongo's Client connection"""
    con = connection.connection
    if con is None:
        connection.connect()
    return con
