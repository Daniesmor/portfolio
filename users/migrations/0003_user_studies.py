# Generated by Django 4.2.3 on 2023-07-20 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_university_alter_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='studies',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
