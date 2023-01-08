import { Button, Modal } from "antd";
import RenderElementPreview from "./RenderElementPreview";

export default function PreviewForm({ t, elements, visible, close }) {
  return (
    <Modal
      className="preview-modal"
      destroyOnClose={true}
      maskClosable={false}
      zIndex={999}
      title={t("preview")}
      centered
      open={visible}
      onCancel={() => close()}
      cancelText={t("cancel")}
      width={900}
      footer={[
        <Button key="submit" type="primary" onClick={() => close()}>
          {t("close")}
        </Button>,
      ]}
    >
      {(() => {
        if (visible)
          return (
            <form>
              {Object.keys(elements).map((key) =>
                RenderElementPreview(t, elements[key])
              )}
            </form>
          );
      })()}
    </Modal>
  );
}