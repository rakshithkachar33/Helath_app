from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, ExerciseViewSet, PositionViewSet, DesignationViewSet
from . import views
router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'exercises', ExerciseViewSet)
router.register(r'positions', PositionViewSet)
router.register(r'designations', DesignationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('forget-password/', views.ForgetPasswordView.as_view(), name='forget-password'),
    path('change-password/', views.ChangePasswordView.as_view(), name='change-password'),
]
