import {
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { add, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Employee from "./Employee";
import { removeEmployee, searchEmployees } from "./EmployeeApi";

const EmployeeList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [empleados, setClientes] = useState<Employee[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchEmployees();
    setClientes(result);
  };

  const remove = async (id: string) => {
    await removeEmployee(id);
    search();
  };

  const addEmployee = () => {
    history.push("/page/employees/new");
  };

  const editEmployee = (id: string) => {
    history.push("/page/employees/" + id);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonTitle>Gestión de Empleados</IonTitle>

          <IonItem>
            <IonButton
              onClick={addEmployee}
              color="primary"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={add} />
              Agregar Empleado
            </IonButton>
          </IonItem>

          <IonGrid className="table">
            <IonRow>
              <IonCol>Nombre</IonCol>
              <IonCol>Email</IonCol>
              <IonCol>Teléfono</IonCol>
              <IonCol>Dirección</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {empleados.map((empleado: Employee) => (
              <IonRow key={empleado.id}>
                <IonCol>{empleado.firstname + " " + empleado.lastname}</IonCol>
                <IonCol>{empleado.email}</IonCol>
                <IonCol>{empleado.phone}</IonCol>
                <IonCol>{empleado.address}</IonCol>
                <IonCol>
                  <IonButton
                    onClick={() => editEmployee(String(empleado.id))}
                    color="primary"
                    fill="clear"
                  >
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>

                  <IonButton
                    color="danger"
                    fill="clear"
                    onClick={() => remove(String(empleado.id))}
                  >
                    <IonIcon icon={close} slot="icon-only" />
                  </IonButton>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeList;
