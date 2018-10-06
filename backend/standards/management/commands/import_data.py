from collections import OrderedDict

import csv
import os
from django.core.management.base import BaseCommand

from standards import models


class Command(BaseCommand):
    help = "Import any CSV file in the sample format to DB in"

    def add_arguments(self, parser):
        parser.add_argument(
            "--path",
            dest="path",
            type=str,
            help="Path to the file to import",
            default=os.path.join("data", "example-data.csv"),
        )

    def handle(self, *args, **options):
        path = options["path"]
        with open(path) as f:
            reader = csv.DictReader(f)
            for line in reader:  # type: OrderedDict
                tags = []
                for tag in models.TAG_ORDER:  # type: str
                    kwargs = {"name": tag, "value": line[tag]}
                    if tag == "FULL_CODE":
                        kwargs["description"] = line["DESCRIPTION"]
                    tags.append(models.Tag.objects.create(**kwargs))

                standard = models.Standard()
                standard.name = line["STANDARD"]
                standard.tags = tags
                standard.save()
