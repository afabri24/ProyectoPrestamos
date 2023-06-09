# Generated by Django 4.0 on 2023-04-16 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prestamo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('montoPrestar', models.CharField(max_length=20)),
                ('interes', models.CharField(max_length=20)),
                ('pagoMensual', models.CharField(max_length=30)),
                ('numeroCliente', models.CharField(max_length=13)),
                ('numeroEmpleado', models.CharField(max_length=50)),
                ('fechaPrestamo', models.CharField(max_length=10)),
                ('fechaPago', models.CharField(max_length=12)),
            ],
        ),
    ]
