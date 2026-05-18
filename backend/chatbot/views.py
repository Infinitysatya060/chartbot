from rest_framework.decorators import api_view
from rest_framework.response import Response

from .ai import ask_ai
from database.db import chat_collection

from datetime import datetime


@api_view(['POST'])
def chatbot(request):

    message = request.data.get('message')

    if not message:

        return Response({
            'error': 'Message is required'
        }, status=400)

    reply = ask_ai(message)

    # SAVE TO DATABASE

    chat_collection.insert_one({

        "message": message,
        "reply": reply,
        "created_at": datetime.utcnow()

    })

    return Response({
        'reply': reply
    })