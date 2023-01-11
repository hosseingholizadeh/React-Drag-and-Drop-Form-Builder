import { Radio } from "antd";
import React from "react";
import { DataLoadType } from "../../Datasource/DataLoadType";
import { DatasourceFactory } from "../../Datasource/DatasourceFactory";
import { FromServerDatasourceOptions } from "./FromServerDatasourceOptions";
import { ManualDatasourceOptions } from "./ManualDatasourceOptions";

export default function ElementDataLoadOptions({
  t,
  elementType,
  datasource,
  setOptions,
}) {
  const onChangeDataSource = () => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      datasource: datasource,
    }));
  };

  if (!datasource) {
    datasource = DatasourceFactory.CreateDatasource(
      elementType,
      onChangeDataSource
    );
  }

  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="inputs">
            <div class="form-group">
              <Radio.Group
                defaultValue={datasource.loadType}
                onChange={(e) => datasource.changeLoadType(e.target.value)}
              >
                {Object.keys(DataLoadType).map((key) => (
                  <Radio value={DataLoadType[key]}>{t(key)}</Radio>
                ))}
              </Radio.Group>
            </div>
          </div>
        </div>
      </div>

      {(() => {
        if (datasource.loadType === DataLoadType.fromserver) {
          return <FromServerDatasourceOptions t={t} datasource={datasource} />;
        } else {
          return <ManualDatasourceOptions t={t} datasource={datasource} />;
        }
      })()}
    </>
  );
}