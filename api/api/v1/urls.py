from django.conf.urls import url, include
from rest_framework import routers
# from api.v1.account import views
from django.views.generic import TemplateView
# from .api import RegistrationAPI

router = routers.DefaultRouter()
# router.register(r'/', views.UserViewSet)

# router.register(r'users', views.UserViewSet)
# router.register(r'reports', views.ReportViewSet)
# router.register(r'timeslot', views.TimeSlotViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    # url(r'^theapi/auth/', include('knox.urls')),
    url(r'^home', TemplateView.as_view(template_name="index.html")),
    url(r'^rest-auth/', include('api.v1.rest_auth.urls')),
    url(r'^rest-auth/registration/', include('api.v1.rest_auth.registration.urls')),
    # url(r'^account/', include('allauth.urls')),


]