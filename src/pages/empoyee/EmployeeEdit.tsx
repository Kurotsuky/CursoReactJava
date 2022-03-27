/* eslint-disable react-hooks/exhaustive-deps */
import {
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonLabel,
  IonInput,
  IonCol,
  IonRow,
} from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Employee from "./Employee";
import { saveEmployee, searchEmployeeById } from "./EmployeeApi";

const EmployeeEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  const [employee, setEmployee] = useState<Employee>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [id]);

  const search = () => {
    if (id === "new") {
      return;
    }

    let result = searchEmployeeById(id);
    setEmployee(result);
  };

  const save = () => {
    saveEmployee(employee);
    history.push("/page/employees");
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
          <IonTitle>
            {id === "new" ? "Agregar Empleado" : "Editar Empleado"}
          </IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nombre</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.firstName = String(e.detail.value))
                  }
                  value={employee.firstName}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Apellido</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.lastName = String(e.detail.value))
                  }
                  value={employee.lastName}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  onIonChange={(e) => (employee.email = String(e.detail.value))}
                  value={employee.email}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Dirección</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (employee.address = String(e.detail.value))
                  }
                  value={employee.address}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Telefono</IonLabel>
                <IonInput
                  onIonChange={(e) => (employee.phone = String(e.detail.value))}
                  value={employee.phone}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol></IonCol>
          </IonRow>

          <IonItem>
            <IonButton
              onClick={save}
              color="success"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={checkmark} />
              Guardar
            </IonButton>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeEdit;
