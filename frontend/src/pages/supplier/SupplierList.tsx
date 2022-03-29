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
import Supplier from "./Supplier";
import { removeSupplier, searchSuppliers } from "./SupplierApi";

const SupplierList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [proveedores, setClientes] = useState<Supplier[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchSuppliers();
    setClientes(result);
  };

  const remove = async (id: string) => {
    await removeSupplier(id);
    search();
  };

  const addSupplier = () => {
    history.push("/page/suppliers/new");
  };

  const editSupplier = (id: string) => {
    history.push("/page/suppliers/" + id);
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
              onClick={addSupplier}
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
              <IonCol>Web</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>

            {proveedores.map((proveedor: Supplier) => (
              <IonRow key={proveedor.id}>
                <IonCol>{proveedor.name}</IonCol>
                <IonCol>{proveedor.email}</IonCol>
                <IonCol>{proveedor.phone}</IonCol>
                <IonCol>{proveedor.web}</IonCol>
                <IonCol>
                  <IonButton
                    onClick={() => editSupplier(String(proveedor.id))}
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

export default SupplierList;
