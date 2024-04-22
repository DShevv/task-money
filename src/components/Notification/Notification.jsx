import {
  NotiContainer,
  NotiSuccess,
  NotiCaption,
  CloseButton,
} from "./Notification.style";
import { SvgCross } from "../../assets/icons/svgs";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const Notification = ({ toa, text, status }) => {
  const { t } = useTranslation();

  return (
    <NotiContainer>
      <NotiSuccess $ok={status === 200 ? 1 : 0} />
      <NotiCaption>
        <span>{t(text[0])} </span>
        {t(text[1])}
      </NotiCaption>
      <CloseButton
        onClick={() => {
          toast.dismiss(toa.id);
        }}
      >
        {<SvgCross />}
      </CloseButton>
    </NotiContainer>
  );
};

export default Notification;
