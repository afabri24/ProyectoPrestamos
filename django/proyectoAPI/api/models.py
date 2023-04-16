from django.db import models

# Create your models here.


class Cliente(models.Model):
    name = models.CharField(max_length=20)
    apellidos = models.CharField(max_length=20)
    fechaNacimiento = models.CharField(max_length=30)
    rfc = models.CharField(max_length=13)
    correo = models.CharField(max_length=50)
    telefono = models.CharField(max_length=10)
    password = models.CharField(max_length=12)


class Prestamo(models.Model):
    montoPrestar = models.CharField(max_length=20)
    interes = models.CharField(max_length=20)
    pagoMensual = models.CharField(max_length=30)
    numeroCliente = models.CharField(max_length=13)
    numeroEmpleado = models.CharField(max_length=50)
    fechaPrestamo = models.CharField(max_length=10)
    fechaPago = models.CharField(max_length=12)

    

