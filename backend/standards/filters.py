from django_filters.rest_framework import FilterSet, CharFilter

from . import models


class StandardFilterSet(FilterSet):
    name = CharFilter(lookup_expr="icontains")

    class Meta:
        model = models.Standard
        fields = ["name"]


class TagFilterSet(FilterSet):
    value = CharFilter(lookup_expr="icontains")

    class Meta:
        model = models.Tag
        fields = ["name"]
