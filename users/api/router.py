from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from users.api.views import UserView
from users.api.views import get_all_users

urlpatterns = [
    path('auth/login', TokenObtainPairView.as_view()),
    path('auth/token/refresh', TokenRefreshView.as_view()),
    path('auth/me', UserView.as_view()),
    path('auth/users/', get_all_users, name='get_all_users'),
]

