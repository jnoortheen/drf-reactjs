from rest_framework import serializers
from typing import List

from standards import models


class TagSerializer(serializers.ModelSerializer):
    """nested node"""

    class Meta:
        model = models.Tag
        read_only_fields = ("_id",)
        fields = "__all__"


class StandardSerializer(serializers.ModelSerializer):
    """root node of the data"""

    tags = TagSerializer(many=True)
    """list of child nodes"""

    class Meta:
        model = models.Standard
        read_only_fields = ("_id",)
        fields = "__all__"

    def create(self, validated_data):
        data = dict(validated_data)  # copy dict since it is mutable
        tags = self.create_tags(data.pop("tags", []))
        data.update({"tags": tags})

        ser: models.Standard = self.Meta.model.objects.create(**data)
        return ser

    def create_tags(self, tags_datas: List[dict]):
        tags = []
        for data in tags_datas:
            ser = TagSerializer(data=data)
            assert ser.is_valid()
            tags.append(ser.save())
        return tags
