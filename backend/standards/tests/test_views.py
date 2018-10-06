from django.urls import reverse
from rest_framework.response import Response

from standards import models


def test_create_view(api_client, fakr, db):
    tags = []
    for name in models.TAG_ORDER:
        tags.append({"name": name, "value": fakr.text()})
    data = {"name": fakr.text(50), "tags": tags}
    resp: Response = api_client.post(
        path=reverse("standard-list"), data=data, format="json"
    )
    assert resp.data["name"]
    assert len(resp.data["tags"]) == len(tags)
