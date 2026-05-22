from django.db import models


class Chat(models.Model):

    message = models.TextField()

    reply = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message