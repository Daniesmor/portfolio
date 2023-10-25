from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import PostView
from django.urls import path


urlpatterns = [
    path('<slug:slug>/', PostView.as_view(), name='post_detail'),
]

urlpatterns += staticfiles_urlpatterns()
