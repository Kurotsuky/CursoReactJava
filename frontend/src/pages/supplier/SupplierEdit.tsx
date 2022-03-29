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
import Supplier from "./Supplier";
import { saveSupplier, searchSupplierById } from "./SupplierApi";

const SupplierEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  const [supplier, setSupplier] = useState<Supplier>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, [id]);

  const search = async () => {
    if (id === "new") {
      setSupplier({});
      return;
    }

    let result = await searchSupplierById(id);
    setSupplier(result);
  };

  const save = async () => {
    await saveSupplier(supplier);
    history.push("/page/suppliers");
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
            {id === "new" ? "Agregar Proveedor" : "Editar Proveedor"}
          </IonTitle>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Nombre</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.name = String(e.detail.value))}
                  value={supplier.name}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Contacto</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (supplier.contact = String(e.detail.value))
                  }
                  value={supplier.contact}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.email = String(e.detail.value))}
                  value={supplier.email}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Dirección</IonLabel>
                <IonInput
                  onIonChange={(e) =>
                    (supplier.address = String(e.detail.value))
                  }
                  value={supplier.address}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Telefono</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.phone = String(e.detail.value))}
                  value={supplier.phone}
                ></IonInput>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Web</IonLabel>
                <IonInput
                  onIonChange={(e) => (supplier.web = String(e.detail.value))}
                  value={supplier.web}
                ></IonInput>
              </IonItem>
            </IonCol>
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

export default SupplierEdit;
