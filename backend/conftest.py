import faker
import pytest


@pytest.fixture
def fakr() -> faker.generator.Generator:
    return faker.Faker()


@pytest.fixture
def mdb():
    """return mongodb Database connection"""
    from . import db

    return db.get_db()


@pytest.fixture
def api_client():
    """Django rest framework client as a fixture"""
    from rest_framework.test import APIClient

    client = APIClient()
    yield client
