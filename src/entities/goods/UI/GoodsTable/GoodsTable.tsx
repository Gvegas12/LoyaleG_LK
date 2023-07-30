import React from "react";
import { useParams } from "react-router-dom";

import UI from "@/shared/UI";
import { GoodsService } from "../../model/services/GoodsService/GoodsService";
import { Good } from "../../model/types";

import styles from "./GoodsTable.module.scss";
import AddNewGoodModal from "../AddNewGoodModal/AddNewGoodModal";

export const GoodsTable: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [goods, setGoods] = React.useState<Good[]>([]);
  const [addNew, setAddNew] = React.useState(false);

  React.useEffect(() => {
    GoodsService.getlAllFromOneEstablishment(Number(id))
      .then((data) => {
        setGoods(data);
        console.log("goods", data);
      })
      .catch(console.error);
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {goods && (
        <UI.Table
          className={styles.table}
          head={["ID", "Name", "Price"]}
          body={goods}
          omit={["createdAt", "updatedAt", "extra", "establishmentId"]}
        />
      )}

      <UI.Button
        onClick={() => setAddNew(true)}
        size="large"
        className={styles.btn}
      >
        Добавить новый товар
      </UI.Button>

      {addNew && (
        <AddNewGoodModal isOpen={addNew} onClose={() => setAddNew(false)} />
      )}
    </div>
  );
};
