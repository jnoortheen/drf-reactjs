import logging

from standards import models, serializers


def test_tag_model_save(fakr, db):
    """test model definitions"""
    tags = []
    for name in models.TAG_ORDER:
        t = models.Tag(name=name, value=fakr.text())
        t.save()
        assert t._id
        tags.append(t)

    std = models.Standard()
    std.name = fakr.text(50)
    std.tags = tags
    std.save()
    assert std._id


def test_tag_creation(fakr, db):
    """test serializers"""
    tags = []
    for name in models.TAG_ORDER:
        ser = serializers.TagSerializer(data={"name": name, "value": fakr.text()})
        assert ser.is_valid()
        t = ser.save()
        assert t._id
        assert t.name
        assert t.value
        tags.append(t)


def test_standard_creation(fakr, db):
    tags = []
    for name in models.TAG_ORDER:
        tags.append({"name": name, "value": fakr.text()})
    data = {"name": fakr.text(50), "tags": tags}
    std = serializers.StandardSerializer(data=data)
    logging.warning("%s %s -%s" % (std.is_valid(), std.errors, len(data["name"])))
    assert std.is_valid()
    rec = std.save()
    assert rec._id
    assert len(rec.tags) == len(tags)
