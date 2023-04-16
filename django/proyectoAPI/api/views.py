from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Cliente, Prestamo
import json

# Create your views here.

class ClienteView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id = 0):
        if (id > 0):
            clientes = list(Cliente.objects.filter(id=id).values())
            if len(clientes) > 0:
                cliente = clientes[0]
                datos={'message':"Seccess",'clientes':cliente}
            else:
                datos = {'message':"Clientes not found"}
            return JsonResponse(datos)
        else: 
            clientes = list(Cliente.objects.values())
            if len(clientes)>0:
                datos={'message':"Seccess",'clientes':clientes}
            else:
                datos={'message':"Clientes not found"}
            return JsonResponse(datos)

    def post(self, request):
        #print(request.body)
        jd = json.loads(request.body)
        Cliente.objects.create(name = jd['name'], apellidos = jd['apellidos'],
                                fechaNacimiento = jd['fechaNacimiento'], rfc = jd['rfc'],
                                correo = jd['correo'], telefono = jd['telefono'], password = jd['password'])
        print(jd)
        datos = {'message':"Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        clientes = list(Cliente.objects.filter(id=id).values())
        if len(clientes) > 0:
            cliente=Cliente.objects.get(id=id)
            cliente.name=jd['name']
            cliente.apellidos = jd['apellidos']
            cliente.fechaNacimiento = jd['fechaNacimiento']
            cliente.rfc = jd['rfc']
            cliente.correo = jd['correo']
            cliente.telefono = jd['telefono']
            cliente.password = jd['password']
            cliente.save()
            datos = {'message': "Success"}
        else:
            datos={'message':"clientes not found"}
        return JsonResponse(datos)

    def delete(self, request, id):
        clientes = list(Cliente.objects.filter(id=id).values())
        if len(clientes) > 0:
            Cliente.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos={'message':"Clientes not found"}
        return JsonResponse(datos)
    

class PrestamoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id = 0):
        if (id > 0):
            prestamos = list(Prestamo.objects.filter(id=id).values())
            if len(prestamos) > 0:
                prestamo = prestamos[0]
                datos={'message':"Success",'prestamos':prestamos}
            else:
                datos = {'message':"prestamos not found"}
            return JsonResponse(datos)
        else: 
            prestamos = list(Prestamo.objects.values())
            if len(prestamos)>0:
                datos={'message':"Success",'prestamos':prestamos}
            else:
                datos={'message':"prestamos not found"}
            return JsonResponse(datos)

    def post(self, request):
        #print(request.body)
        jd = json.loads(request.body)
        Prestamo.objects.create(montoPrestar = jd['montoPrestar'], interes = jd['interes'],
                                pagoMensual = jd['pagoMensual'], numeroCliente = jd['numeroCliente'],
                                numeroEmpleado = jd['numeroEmpleado'], fechaPrestamo = jd['fechaPrestamo'], fechaPago = jd['fechaPago'])
        print(jd)
        datos = {'message':"Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        prestamos = list(Prestamo.objects.filter(id=id).values())
        if len(prestamos) > 0:
            prestamo=Prestamo.objects.get(id=id)
            prestamo.montoPrestar=jd['montoPrestar']
            prestamo.interes = jd['interes']
            prestamo.pagoMensual = jd['pagoMensual']
            prestamo.numeroCliente = jd['numeroCliente']
            prestamo.numeroEmpleado = jd['numeroEmpleado']
            prestamo.fechaPrestamo = jd['fechaPrestamo']
            prestamo.fechaPago = jd['fechaPago']
            prestamo.save()
            datos = {'message': "Success"}
        else:
            datos={'message':"prestamos not found"}
        return JsonResponse(datos)

    def delete(self, request, id):
        prestamos = list(Prestamo.objects.filter(id=id).values())
        if len(prestamos) > 0:
            Prestamo.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos={'message':"prestamos not found"}
        return JsonResponse(datos)