from standards.models import Tag


def test_tag_model_save(fakr, db):
    t = Tag(name=fakr.sentence(60), description=fakr.text())
    t.save()
    assert t._id


def test_tag_creation(fakr):
    pass
