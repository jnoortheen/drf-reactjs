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
