# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-11-08 13:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books_authors_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='author',
            name='notes',
            field=models.TextField(default='new Note'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='author',
            name='last_name',
            field=models.CharField(max_length=45),
        ),
    ]
