import BaseElementOptions from "./BaseElementOptions";

export default function TabsOptions({ t, options, setOptions }) {
  return (
    <div>
      <BaseElementOptions t={t} style={options.style} setOptions={setOptions} />
      <div class="row">
        <div class="col-12">
          <div class="inputs">
            <span class="title">{t("extra Tabs options")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}