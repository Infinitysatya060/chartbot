from rest_framework.decorators import api_view
from rest_framework.response import Response

from .ai import ask_ai
from .models import Chat


@api_view(['POST'])
def chatbot(request):

    message = request.data.get('message')

    if not message:

        return Response({
            'error': 'Message is required'
        }, status=400)

    # GET AI RESPONSE
    reply = ask_ai(message)

    # SAVE TO MYSQL DATABASE
    Chat.objects.create(
        message=message,
        reply=reply
    )

    return Response({
        'reply': reply
    })