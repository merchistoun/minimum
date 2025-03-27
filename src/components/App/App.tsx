import { NAMESPACE, useTranslate } from "../../localization";

export const App = (): React.ReactElement => {
  const { translate } = useTranslate(NAMESPACE.default);

  return (
    <div>
      <h1>{translate("title")}</h1>
    </div>
  );
};
