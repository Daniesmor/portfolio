from django.shortcuts import render
from django.views import View
import requests

# Create your views here.

class PostView(View):
    template_name = 'posts/post.html'

    def get(self, request, slug):
        api_url = f"http://127.0.0.1:8000/api/posts/{slug}"
        response = requests.get(api_url)
        post_data = response.json()

        context = {
            'post' : post_data
        }

        return render(request, self.template_name, context)