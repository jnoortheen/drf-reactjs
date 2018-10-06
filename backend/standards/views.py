from rest_framework.viewsets import ModelViewSet

from standards import models, serializers


class StandardViewSet(ModelViewSet):
    """
    List all snippets, or create a new snippet.
    """

    queryset = models.Standard.objects.all()
    serializer_class = serializers.StandardSerializer
