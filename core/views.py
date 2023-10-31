from django.shortcuts import render
from django.views import View
from posts.models import Post

class HeaderView(View):
    def get(self, request):
        return render(request, "core/header.html")


class HomeView(View):
    def get(self, request):
        return render(request, "core/index.html")
    
class Personalized(View):
    def get(self, request, username):
        print(f'mi usuario {username}')
        context = {
            'user' : username
        }

        return render(request, "core/index.html", context)