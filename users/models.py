from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)
    complete_name = models.CharField(max_length=255, blank=True)
    avatar = models.ImageField(upload_to='users/img/', blank=True)
    university = models.CharField(max_length=255, blank=True)
    studies = models.CharField(max_length=255, blank=True)
    twitter_link = models.CharField(max_length=255, blank=True)
    instagram_link = models.CharField(max_length=255, blank=True)
    github_link = models.CharField(max_length=255, blank=True)
    linkedin_link = models.CharField(max_length=255, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []