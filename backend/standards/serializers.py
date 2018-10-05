from rest_framework import serializers


class TagSerializer(serializers.Serializer):
    """nested node"""

    _id = serializers.CharField(read_only=True)

    name = serializers.CharField(max_length=100)
    """one of "GRADE", "LEARNING_DOMAIN", "FULL_CODE", """

    value = serializers.CharField(allow_blank=True, allow_null=True, required=False)
    """the tag's value"""

    description = serializers.CharField(
        allow_blank=True, allow_null=True, required=False
    )
    """optional description. Only be filled for the deepest node."""


class StandardSerializer(serializers.Serializer):
    """root node of the data"""

    _id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100)

    tags = TagSerializer(many=True)
    """list of child nodes"""
