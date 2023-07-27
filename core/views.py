from django.shortcuts import render
from django.views import View


class HeaderView(View):
    def get(self, request):
        return render(request, "core/header.html")


class HomeView(View):
    def get(self, request):
        return render(request, "core/index.html")