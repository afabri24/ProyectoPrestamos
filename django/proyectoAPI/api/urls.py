from django.urls import path
from .views import ClienteView, PrestamoView

urlpatterns = [
    path('clientes/', ClienteView.as_view(), name='clientes_list'),
    path('clientes/<int:id>', ClienteView.as_view(), name='clientes_process'),
    path('prestamos/', PrestamoView.as_view(), name='prestamos_list'),
    path('prestamos/<int:id>', PrestamoView.as_view(), name='prestamos_process')
]