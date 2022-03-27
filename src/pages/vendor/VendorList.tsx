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
import Vendor from "./Vendor";
import { removeVendor, searchVendors } from "./VendorApi";

const VendorList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [proveedors, setClientes] = useState<Vendor[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = () => {
    let result = searchVendors();
    setClientes(result);
  };

  const remove = (id: string) => {
    removeVendor(id);
    search();
  };

  const addVendor = () => {
    history.push("/page/vendor/new");
  };

  const editVendor = (id: string) => {
    history.push("/page/vendor/" + id);
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
          <IonTitle>Gestión de Proveedores</IonTitle>

          <IonItem>
            <IonButton
              onClick={addVendor}
              color="primary"
              fill="solid"
              slot="end"
              size="default"
            >
              <IonIcon icon={add} />
              Agregar Proveedor
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

            {proveedors.map((proveedor: Vendor) => (
              <IonRow key={proveedor.id}>
                <IonCol>
                  {proveedor.firstName + " " + proveedor.lastName}
                </IonCol>
                <IonCol>{proveedor.email}</IonCol>
                <IonCol>{proveedor.phone}</IonCol>
                <IonCol>{proveedor.address}</IonCol>
                <IonCol>
                  <IonButton
                    onClick={() => editVendor(String(proveedor.id))}
                    color="primary"
                    fill="clear"
                  >
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>

                  <IonButton
                    color="danger"
                    fill="clear"
                    onClick={() => remove(String(proveedor.id))}
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

export default VendorList;
