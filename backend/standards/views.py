from rest_framework.mixins import ListModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet

from . import models, serializers, filters


class StandardViewSet(ModelViewSet):
    """
    List all snippets, or create a new snippet.
    """

    queryset = models.Standard.objects.all()
    serializer_class = serializers.StandardSerializer


class StandardListViewSet(ListModelMixin, GenericViewSet):
    """Implements only list view with another serializer and filters available"""

    queryset = models.Standard.objects.all()
    serializer_class = serializers.StandardListSerializer
    filterset_class = filters.StandardFilterSet


class TagViewSet(ModelViewSet):
    """
    List all snippets, or create a new snippet.
    """

    queryset = models.Tag.objects.all()
    serializer_class = serializers.TagSerializer
    filterset_class = filters.TagFilterSet
