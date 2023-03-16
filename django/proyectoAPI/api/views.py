from django.http.response import JsonResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Empleado
import json

# Create your views here.

class EmpleadoView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id = 0):
        if (id > 0):
            empleados = list(Empleado.objects.filter(id=id).values())
            if len(empleados) > 0:
                empleado = empleados[0]
                datos={'message':"Seccess",'empleados':empleado}
            else:
                datos = {'message':"Empleados not found"}
            return JsonResponse(datos)
        else: 
            empleados = list(Empleado.objects.values())
            if len(empleados)>0:
                datos={'message':"Seccess",'empleados':empleados}
            else:
                datos={'message':"Empleados not found"}
            return JsonResponse(datos)

    def post(self, request):
        #print(request.body)
        jd = json.loads(request.body)
        Empleado.objects.create(name = jd['name'], apellidos = jd['apellidos'],
                                fechaNacimiento = jd['fechaNacimiento'], rfc = jd['rfc'],
                                correo = jd['correo'], telefono = jd['telefono'])
        print(jd)
        datos = {'message':"Success"}
        return JsonResponse(datos)

    def put(self, request, id):
        jd = json.loads(request.body)
        empleados = list(Empleado.objects.filter(id=id).values())
        if len(empleados) > 0:
            empleado=Empleado.objects.get(id=id)
            empleado.name=jd['name']
            empleado.apellidos = jd['apellidos']
            empleado.fechaNacimiento = jd['fechaNacimiento']
            empleado.rfc = jd['rfc']
            empleado.correo = jd['correo']
            empleado.telefono = jd['telefono']
            empleado.save()
            datos = {'message': "Success"}
        else:
            datos={'message':"Empleados not found"}
        return JsonResponse(datos)

    def delete(self, request, id):
        empleados = list(Empleado.objects.filter(id=id).values())
        if len(empleados) > 0:
            Empleado.objects.filter(id=id).delete()
            datos = {'message': "Success"}
        else:
            datos={'message':"Empleados not found"}
        return JsonResponse(datos)