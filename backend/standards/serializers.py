from rest_framework import serializers
from typing import List

from standards import models


class TagSerializer(serializers.ModelSerializer):
    """nested node"""

    _id = serializers.CharField(read_only=True)

    class Meta:
        model = models.Tag
        fields = "__all__"


class StandardListSerializer(serializers.ModelSerializer):
    """for select2 AJAX LIST view"""

    _id = serializers.CharField(read_only=True)

    class Meta:
        model = models.Standard
        fields = ["_id", "name"]


class StandardSerializer(serializers.ModelSerializer):
    """root node of the data"""

    _id = serializers.CharField(read_only=True)

    tags = TagSerializer(many=True)
    """list of child nodes"""

    class Meta:
        model = models.Standard
        read_only_fields = ("_id",)
        fields = "__all__"

    def create(self, validated_data):
        data = dict(validated_data)  # copy dict since it is mutable
        tags_data = data.pop("tags", []) or (
            self.initial_data.get("tags", []) if self.initial_data else []
        )
        tags = self.create_tags(tags_data)
        data.update({"tags": tags})

        ser: models.Standard = self.Meta.model.objects.create(**data)
        return ser

    def create_tags(self, tags_datas: List[dict]):
        tags = []
        for data in tags_datas:
            ser = TagSerializer(data=data)
            ser.is_valid(raise_exception=True)
            tags.append(ser.save())
        return tags

    def update(self, instance: models.Standard, validated_data):
        data = dict(validated_data)  # copy dict since it is mutable
        tags_data = data.pop("tags", [])
        instance.tags = self.create_tags(tags_data)

        # set other attributes
        for attr, val in data.items():
            setattr(instance, attr, val)
        instance.save()
        return instance
