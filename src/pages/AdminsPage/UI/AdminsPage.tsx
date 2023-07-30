import React from "react";

import UI from "@/shared/UI";
import { useUserStore, AdminAuthCodesModal } from "@/entities/user";

const AdminsPage: React.FC = () => {
  const [modalIsShow, setModalIsShow] = React.useState(false);
  const { authCodeData, user } = useUserStore((state) => state);

  React.useEffect(() => {
    setModalIsShow(true);
  }, []);

  console.log(user);

  return (
    <div>
      AdminsPage
      <UI.Button onClick={() => setModalIsShow(true)}>Показать коды</UI.Button>
      {authCodeData && authCodeData?.length && modalIsShow && (
        <AdminAuthCodesModal
          isOpen={modalIsShow}
          onClose={() => setModalIsShow(false)}
          authCodeData={authCodeData}
        />
      )}
      <img
        src="http://qrcoder.ru/code/?https%3A%2F%2Ft.me%2Fg_admin_loyale_bot%3Fstart&4&0"
        alt="qr_code"
      />
    </div>
  );
};

export default AdminsPage;
