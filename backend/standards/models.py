from djongo import models

TAG_ORDER = ["GRADE", "END_GRADE", "LEARNING_DOMAIN", "FULL_CODE"]


class Tag(models.Model):
    _id = models.ObjectIdField()

    name = models.CharField(max_length=100)
    """one of "GRADE", "LEARNING_DOMAIN", "FULL_CODE", """

    value = models.TextField(blank=True, null=True)
    """the tag's value"""

    description = models.TextField(blank=True, null=True)
    """optional description. Only be filled for the deepest node."""


class Standard(models.Model):
    """root node of the data"""

    _id = models.ObjectIdField()
    name = models.TextField(max_length=100)
    tags = models.ArrayModelField(model_container=Tag)
    """list of child nodes"""
