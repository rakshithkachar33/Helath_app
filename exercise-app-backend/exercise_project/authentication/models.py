from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models


class Position(models.Model):
    position_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Designation(models.Model):
    designation_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class User(AbstractUser):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    mail_id = models.EmailField(unique=True)
    designation = models.ForeignKey(Designation, on_delete=models.CASCADE)

    groups = models.ManyToManyField(
        Group,
        related_name='customers',
        blank=True,
        help_text=(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='leaders',  # Specify a different related_name
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='user',
    )

    def __str__(self):
        return self.username


class Exercise(models.Model):
    exercise_id = models.AutoField(primary_key=True)
    exercise_name = models.CharField(max_length=100)
    position = models.ForeignKey(Position, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    designation = models.ForeignKey(Designation, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.exercise_name
